// =============================================
// STATE
// =============================================
let registrants = JSON.parse(localStorage.getItem('y121_registrants')) || [];
let churches = JSON.parse(localStorage.getItem('y121_churches')) || [];
let wheelData = [];
let wheelMode = 'church'; // 'church' | 'member'
let selectedChurch = null;
let isSpinning = false;
let currentAngle = 0; // radians

// =============================================
// CANVAS
// =============================================
const canvas = document.getElementById('wheel-canvas');
const ctx = canvas.getContext('2d');
const CX = canvas.width / 2;
const CY = canvas.height / 2;
const R = canvas.width / 2 - 4;

const PALETTE = [
    '#c41e22', '#8b3a0f', '#d4651a', '#9c6b1a',
    '#5a2d0c', '#b5451a', '#7a3010', '#c27d2a',
    '#3b1609', '#c0522b'
];

function drawWheel(data, angle) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!data || data.length === 0) {
        ctx.beginPath();
        ctx.arc(CX, CY, R, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.font = 'bold 16px Montserrat';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('No data available', CX, CY);
        return;
    }

    const sliceAngle = (Math.PI * 2) / data.length;

    data.forEach((item, i) => {
        const start = angle + i * sliceAngle;
        const end = start + sliceAngle;

        ctx.beginPath();
        ctx.moveTo(CX, CY);
        ctx.arc(CX, CY, R, start, end);
        ctx.closePath();
        ctx.fillStyle = PALETTE[i % PALETTE.length];
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.25)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.save();
        ctx.translate(CX, CY);
        ctx.rotate(start + sliceAngle / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#fff';
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 6;
        ctx.font = `bold ${data.length > 10 ? 11 : 13}px Montserrat`;
        ctx.textBaseline = 'middle';

        let label = item.label;
        if (label.length > 20) label = label.slice(0, 18) + '…';
        ctx.fillText(label, R - 18, 0);
        ctx.restore();
    });

    // Center cap
    ctx.beginPath();
    ctx.arc(CX, CY, 22, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// =============================================
// NAVIGATION
// =============================================
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

document.getElementById('btn-to-data').addEventListener('click', () => {
    renderList();
    renderChurchDropdown();
    showPage('page-data');
});
document.getElementById('btn-to-wheel').addEventListener('click', () => {
    startChurchWheel();
    showPage('page-wheel');
});
document.getElementById('btn-data-back').addEventListener('click', () => showPage('page-landing'));
document.getElementById('btn-data-to-wheel').addEventListener('click', () => {
    startChurchWheel();
    showPage('page-wheel');
});
document.getElementById('btn-wheel-back').addEventListener('click', () => showPage('page-landing'));

// =============================================
// DATA & STORAGE
// =============================================
function save() {
    localStorage.setItem('y121_registrants', JSON.stringify(registrants));
    localStorage.setItem('y121_churches', JSON.stringify(churches));
}

// Church dropdown
const selectChurch = document.getElementById('select-church');
const inputNewChurch = document.getElementById('input-new-church');

function renderChurchDropdown() {
    const current = selectChurch.value;

    // Remove all options except the placeholder (index 0)
    while (selectChurch.options.length > 1) {
        selectChurch.remove(1);
    }

    // Re-add the "+ Add new" sentinel at end
    const addNewOpt = document.createElement('option');
    addNewOpt.value = '__new__';
    addNewOpt.textContent = '＋ Add new church…';
    selectChurch.appendChild(addNewOpt);

    // Insert saved churches before the "+ Add new" option
    churches.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        selectChurch.insertBefore(opt, addNewOpt);
    });

    // Restore selection if still valid
    if (current && [...selectChurch.options].some(o => o.value === current)) {
        selectChurch.value = current;
    }
}

selectChurch.addEventListener('change', () => {
    if (selectChurch.value === '__new__') {
        inputNewChurch.classList.remove('hidden');
        inputNewChurch.focus();
    } else {
        inputNewChurch.classList.add('hidden');
        inputNewChurch.value = '';
    }
});

document.getElementById('form-add').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('input-name').value.trim();

    let church = '';
    if (selectChurch.value === '__new__') {
        church = inputNewChurch.value.trim();
        if (!church) return;
        if (!churches.includes(church)) {
            churches.push(church);
            renderChurchDropdown();
        }
        selectChurch.value = church;
        inputNewChurch.classList.add('hidden');
        inputNewChurch.value = '';
    } else {
        church = selectChurch.value;
    }

    if (!name || !church) return;

    registrants.push({ name, church });
    save();
    renderList();

    document.getElementById('input-name').value = '';
    document.getElementById('input-name').focus();
});

document.getElementById('btn-clear').addEventListener('click', () => {
    if (confirm('Clear all registrants? The church list will be kept.')) {
        registrants = [];
        save();
        renderList();
    }
});

function removeRegistrant(i) {
    registrants.splice(i, 1);
    save();
    renderList();
}
window.removeRegistrant = removeRegistrant;

function renderList() {
    const list = document.getElementById('registrant-list');
    if (registrants.length === 0) {
        list.innerHTML = '<p class="empty-state">No registrants yet. Add one above.</p>';
        return;
    }
    list.innerHTML = registrants.map((r, i) => `
        <div class="registrant-item">
            <div class="item-info">
                <span class="item-name">${r.name}</span>
                <span class="item-church">${r.church}</span>
            </div>
            <button class="item-remove" onclick="removeRegistrant(${i})" title="Remove">×</button>
        </div>
    `).join('');
}

// =============================================
// WHEEL
// =============================================
function startChurchWheel() {
    wheelMode = 'church';
    selectedChurch = null;
    document.getElementById('wheel-label').textContent = 'Church Wheel';

    const uniqueChurches = [...new Set(registrants.map(r => r.church))].filter(Boolean);
    wheelData = uniqueChurches.map(c => ({ label: c, value: c }));

    currentAngle = 0;
    drawWheel(wheelData, currentAngle);
}

function startMemberWheel(church) {
    wheelMode = 'member';
    selectedChurch = church;
    document.getElementById('wheel-label').textContent = `${church} — Member Wheel`;

    const members = registrants.filter(r => r.church === church);
    wheelData = members.map(m => ({ label: m.name, value: m }));

    currentAngle = 0;
    drawWheel(wheelData, currentAngle);
}

// =============================================
// SPIN
// =============================================
const btnSpin = document.getElementById('btn-spin');

btnSpin.addEventListener('click', () => {
    if (isSpinning || wheelData.length === 0) return;
    spin();
});

function spin() {
    isSpinning = true;
    btnSpin.disabled = true;

    const totalSpins = (6 + Math.random() * 6) * Math.PI * 2;
    const duration = 5000 + Math.random() * 2000;
    const startAngle = currentAngle;
    const targetAngle = startAngle + totalSpins;
    const startTime = performance.now();

    function easeOut(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        currentAngle = startAngle + (targetAngle - startAngle) * easeOut(progress);
        drawWheel(wheelData, currentAngle % (Math.PI * 2));

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            isSpinning = false;
            btnSpin.disabled = false;
            resolveWinner();
        }
    }

    requestAnimationFrame(tick);
}

// =============================================
// WINNER
// =============================================
function resolveWinner() {
    const sliceAngle = (Math.PI * 2) / wheelData.length;
    const normAngle = ((currentAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const pointerAngle = ((3 * Math.PI / 2) - normAngle + Math.PI * 2) % (Math.PI * 2);
    let idx = Math.floor(pointerAngle / sliceAngle) % wheelData.length;
    if (idx < 0) idx = 0;
    showModal(wheelData[idx]);
}

// =============================================
// MODAL
// =============================================
const modal = document.getElementById('modal');

function showModal(winner) {
    const btnNext = document.getElementById('btn-modal-next');
    const btnClose = document.getElementById('btn-modal-close');

    if (wheelMode === 'church') {
        document.getElementById('modal-eyebrow').textContent = 'Church Selected';
        document.getElementById('modal-name').textContent = winner.label;
        document.getElementById('modal-sub').textContent = 'Spin the member wheel next';
        btnNext.classList.remove('hidden');
        btnClose.classList.add('hidden');
        btnNext.onclick = () => { closeModal(); startMemberWheel(winner.value); };
    } else {
        document.getElementById('modal-eyebrow').textContent = winner.value.church;
        document.getElementById('modal-name').textContent = winner.value.name;
        document.getElementById('modal-sub').textContent = '🎉 Winner!';
        btnNext.classList.add('hidden');
        btnClose.classList.remove('hidden');
        btnClose.onclick = () => {
            const i = registrants.findIndex(r => r.name === winner.value.name && r.church === winner.value.church);
            if (i !== -1) { registrants.splice(i, 1); save(); }
            closeModal();
            startChurchWheel();
        };
    }

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

// Init dropdown on load
renderChurchDropdown();
