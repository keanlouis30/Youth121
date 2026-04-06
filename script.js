// =============================================
// STATE
// =============================================
let allRegistrants = []; // parsed from CSV — never mutated
let pickedMembers = JSON.parse(localStorage.getItem('y121_pickedMembers')) || [];
// Each entry: { name, church }
let pickedChurchesThisRound = JSON.parse(localStorage.getItem('y121_pickedChurchesRound')) || [];

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
    updateStats();
    showPage('page-data');
});
document.getElementById('btn-to-wheel').addEventListener('click', () => {
    if (allRegistrants.length === 0) {
        alert('Please load a CSV file first from the Registrants page.');
        return;
    }
    startChurchWheel();
    renderWinnersList();
    showPage('page-wheel');
});
document.getElementById('btn-data-back').addEventListener('click', () => showPage('page-landing'));
document.getElementById('btn-data-to-wheel').addEventListener('click', () => {
    if (allRegistrants.length === 0) {
        alert('Please load a CSV file first.');
        return;
    }
    startChurchWheel();
    renderWinnersList();
    showPage('page-wheel');
});
document.getElementById('btn-wheel-back').addEventListener('click', () => showPage('page-landing'));

// =============================================
// CSV PARSING
// =============================================
function parseCSV(text) {
    const lines = text.split(/\r?\n/);
    const results = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        // Parse the line respecting quoted fields
        const fields = parseCSVLine(line);
        if (fields.length < 2) continue;

        const name = fields[0].trim();
        const church = fields[1].trim();

        // Skip header rows and empty data
        if (!name || !church) continue;
        if (name.toLowerCase() === 'name' && church.toLowerCase() === 'church') continue;
        if (name.toLowerCase() === 'name') continue;

        results.push({ name, church });
    }

    return results;
}

function parseCSVLine(line) {
    const fields = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
                current += '"';
                i++; // skip next quote
            } else {
                inQuotes = !inQuotes;
            }
        } else if (ch === ',' && !inQuotes) {
            fields.push(current);
            current = '';
        } else {
            current += ch;
        }
    }
    fields.push(current);
    return fields;
}

// =============================================
// CSV UPLOAD
// =============================================
const csvFileInput = document.getElementById('csv-file-input');
const csvStatus = document.getElementById('csv-status');

csvFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
        const text = evt.target.result;
        allRegistrants = parseCSV(text);

        if (allRegistrants.length === 0) {
            csvStatus.textContent = '⚠ No valid registrants found in file.';
            csvStatus.className = 'csv-status csv-status--error';
            return;
        }

        // Save to localStorage so it persists across refreshes
        localStorage.setItem('y121_allRegistrants', JSON.stringify(allRegistrants));

        const uniqueChurches = [...new Set(allRegistrants.map(r => r.church))];
        csvStatus.textContent = `✓ Loaded ${allRegistrants.length} registrants from ${uniqueChurches.length} churches`;
        csvStatus.className = 'csv-status csv-status--success';

        renderList();
        updateStats();
    };
    reader.readAsText(file);
});

// Load from localStorage on startup
(function loadSavedRegistrants() {
    const saved = localStorage.getItem('y121_allRegistrants');
    if (saved) {
        allRegistrants = JSON.parse(saved);
        if (allRegistrants.length > 0) {
            const uniqueChurches = [...new Set(allRegistrants.map(r => r.church))];
            csvStatus.textContent = `✓ ${allRegistrants.length} registrants loaded (${uniqueChurches.length} churches)`;
            csvStatus.className = 'csv-status csv-status--success';
        }
    }
})();

// =============================================
// PERSISTENCE
// =============================================
function savePicked() {
    localStorage.setItem('y121_pickedMembers', JSON.stringify(pickedMembers));
    localStorage.setItem('y121_pickedChurchesRound', JSON.stringify(pickedChurchesThisRound));
}

// =============================================
// HELPERS
// =============================================
function isMemberPicked(name, church) {
    return pickedMembers.some(p => p.name === name && p.church === church);
}

function getAvailableChurches() {
    // Churches that still have unpicked members
    const churchesWithMembers = [...new Set(
        allRegistrants
            .filter(r => !isMemberPicked(r.name, r.church))
            .map(r => r.church)
    )];
    return churchesWithMembers;
}

function getChurchesForWheel() {
    // Churches available for this round = churches with unpicked members MINUS already picked this round
    const available = getAvailableChurches();
    return available.filter(c => !pickedChurchesThisRound.includes(c));
}

function getUnpickedMembers(church) {
    return allRegistrants.filter(r =>
        r.church === church && !isMemberPicked(r.name, r.church)
    );
}

// =============================================
// STATS
// =============================================
function updateStats() {
    document.getElementById('stat-total').textContent = allRegistrants.length;
    const uniqueChurches = [...new Set(allRegistrants.map(r => r.church))];
    document.getElementById('stat-churches').textContent = uniqueChurches.length;
    document.getElementById('stat-picked').textContent = pickedMembers.length;
    document.getElementById('stat-remaining').textContent = allRegistrants.length - pickedMembers.length;
}

// =============================================
// REGISTRANT LIST (read-only)
// =============================================
function renderList() {
    const list = document.getElementById('registrant-list');
    if (allRegistrants.length === 0) {
        list.innerHTML = '<p class="empty-state">No registrants loaded. Upload a CSV above.</p>';
        return;
    }

    list.innerHTML = allRegistrants.map((r) => {
        const picked = isMemberPicked(r.name, r.church);
        return `
        <div class="registrant-item ${picked ? 'registrant-item--picked' : ''}">
            <div class="item-info">
                <span class="item-name">${r.name}</span>
                <span class="item-church">${r.church}</span>
            </div>
            ${picked ? '<span class="item-picked-badge">✓ Picked</span>' : ''}
        </div>`;
    }).join('');
}

// =============================================
// RESET WINNERS
// =============================================
document.getElementById('btn-clear').addEventListener('click', () => {
    if (confirm('Reset all picked winners? Everyone will be eligible again.')) {
        pickedMembers = [];
        pickedChurchesThisRound = [];
        savePicked();
        renderList();
        updateStats();
    }
});

document.getElementById('btn-reset-winners').addEventListener('click', () => {
    if (confirm('Reset all picked winners? Everyone will be eligible again.')) {
        pickedMembers = [];
        pickedChurchesThisRound = [];
        savePicked();
        startChurchWheel();
        renderWinnersList();
    }
});

// =============================================
// WHEEL
// =============================================
function startChurchWheel() {
    wheelMode = 'church';
    selectedChurch = null;
    document.getElementById('wheel-label').textContent = 'Church Wheel';

    const availableChurches = getAvailableChurches();

    // Check if ALL members are picked
    if (availableChurches.length === 0) {
        wheelData = [];
        currentAngle = 0;
        drawWheel(wheelData, currentAngle);
        updateRoundInfo();
        // Show "All done" modal
        document.getElementById('modal-done').classList.add('active');
        return;
    }

    let churchesForWheel = getChurchesForWheel();

    // If all churches have been picked this round, reset the round
    if (churchesForWheel.length === 0) {
        pickedChurchesThisRound = [];
        savePicked();
        churchesForWheel = getChurchesForWheel();
    }

    wheelData = churchesForWheel.map(c => ({ label: c, value: c }));
    currentAngle = 0;
    drawWheel(wheelData, currentAngle);
    updateRoundInfo();
}

function startMemberWheel(church) {
    wheelMode = 'member';
    selectedChurch = church;
    document.getElementById('wheel-label').textContent = `${church} — Member Wheel`;

    const members = getUnpickedMembers(church);
    wheelData = members.map(m => ({ label: m.name, value: m }));

    currentAngle = 0;
    drawWheel(wheelData, currentAngle);
    updateRoundInfo();
}

function updateRoundInfo() {
    const available = getAvailableChurches();
    const remaining = getChurchesForWheel();
    const el = document.getElementById('round-info');

    if (available.length === 0) {
        el.textContent = 'All members have been picked!';
    } else if (wheelMode === 'church') {
        el.textContent = `${remaining.length} of ${available.length} churches remaining this round • ${pickedMembers.length} winners total`;
    } else {
        const members = getUnpickedMembers(selectedChurch);
        el.textContent = `${members.length} member${members.length !== 1 ? 's' : ''} remaining in ${selectedChurch}`;
    }
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
        btnNext.onclick = () => {
            // Add to picked churches this round
            pickedChurchesThisRound.push(winner.value);
            savePicked();
            closeModal();
            startMemberWheel(winner.value);
        };
    } else {
        document.getElementById('modal-eyebrow').textContent = winner.value.church;
        document.getElementById('modal-name').textContent = winner.value.name;
        document.getElementById('modal-sub').textContent = '🎉 Winner!';
        btnNext.classList.add('hidden');
        btnClose.classList.remove('hidden');
        btnClose.onclick = () => {
            // Permanently pick this member
            pickedMembers.push({ name: winner.value.name, church: winner.value.church });
            savePicked();
            closeModal();
            renderWinnersList();
            // Go back to church wheel
            startChurchWheel();
        };
    }

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

// All-done modal close
document.getElementById('btn-done-close').addEventListener('click', () => {
    document.getElementById('modal-done').classList.remove('active');
});

// =============================================
// WINNERS LIST
// =============================================
function renderWinnersList() {
    const list = document.getElementById('winners-list');

    if (pickedMembers.length === 0) {
        list.innerHTML = '<p class="empty-state">No winners yet.</p>';
        return;
    }

    // Show in reverse order (most recent first)
    list.innerHTML = pickedMembers.slice().reverse().map((w, i) => `
        <div class="winner-item">
            <span class="winner-number">${pickedMembers.length - i}</span>
            <div class="winner-info">
                <span class="winner-name">${w.name}</span>
                <span class="winner-church">${w.church}</span>
            </div>
        </div>
    `).join('');
}

// =============================================
// INIT
// =============================================
updateStats();
