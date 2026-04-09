// =============================================
// BUILT-IN DATABASE (registration_list.csv)
// =============================================
const BUILTIN_REGISTRANTS = [{"name": "Llanera, Mariel Q.", "church": "Asia Baptist Bible Church"}, {"name": "Samuel Varoja", "church": "God First Bible Baptist Church"}, {"name": "Aries Escabal Enriquez", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Gerald Han", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Gomer Arnoco", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Shalom Grace", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Sol Carmela Gonzales", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Chaz Gonzales", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Eliser Cabanus (Youth Worker)", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Realyn Tabontabon", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Claire Velasco", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Rojane Irish Velasco", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Mayen Armamento", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Lois Ann", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Melissa Rivera Cansino", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Alyssa Allen Go", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Lawrence Go", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Joanna Lima", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Josh Lima", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Alexa Halayap", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Shekinah Casiano", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Mavric Libano", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Janna Libano", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Daniel Acosta", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Dan Gab", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Ronnie Tagaysay Nardo Jr. (Youth Servant)", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Regine Velasco", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Javy Libano", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Samantha D San Pascual", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Jeremy Samson", "church": "The Bible Baptist Church"}, {"name": "Gale Abby Dagdag", "church": "The Bible Baptist Church"}, {"name": "Gaenor Tandoc", "church": "The Bible Baptist Church"}, {"name": "Nathan Hilario", "church": "The Bible Baptist Church"}, {"name": "Adrian Bongulan", "church": "The Bible Baptist Church"}, {"name": "Darlight Delos Reyes", "church": "The Bible Baptist Church"}, {"name": "Emman Buenaobra", "church": "The Bible Baptist Church"}, {"name": "Meek Javier", "church": "The Bible Baptist Church"}, {"name": "Alyssa Bongulan", "church": "The Bible Baptist Church"}, {"name": "Rhemielle Cheska B. Chua", "church": "The Bible Baptist Church"}, {"name": "IsSey Enrile", "church": "The Bible Baptist Church"}, {"name": "Ryan Daniel Daffon", "church": "The Bible Baptist Church"}, {"name": "Christianjay Manangat", "church": "The Bible Baptist Church"}, {"name": "Ammiel Dela Cruz", "church": "The Bible Baptist Church"}, {"name": "Mark Roland Bulalaque", "church": "The Bible Baptist Church"}, {"name": "Luke Andre Gravador", "church": "The Bible Baptist Church"}, {"name": "Lyn Barrientos", "church": "The Bible Baptist Church"}, {"name": "Michelle Ann Jordan", "church": "The Bible Baptist Church"}, {"name": "Isaiah Nicdao", "church": "The Bible Baptist Church"}, {"name": "Moreen A. Buenaobra", "church": "The Bible Baptist Church"}, {"name": "Nehemiah Hyles", "church": "The Bible Baptist Church"}, {"name": "Nicole Algenio", "church": "The Bible Baptist Church"}, {"name": "Nheil Oliver Samson", "church": "The Bible Baptist Church"}, {"name": "Matthew Tejada", "church": "The Bible Baptist Church"}, {"name": "Dhaby Rose De Luna", "church": "The Bible Baptist Church"}, {"name": "Pj Daffon", "church": "The Bible Baptist Church"}, {"name": "Von Emmanuel", "church": "The Bible Baptist Church"}, {"name": "Gabriel Ian Ventura Javier", "church": "The Bible Baptist Church"}, {"name": "Jericho Gil Javier", "church": "The Bible Baptist Church"}, {"name": "Samuel Abednego De Guzman", "church": "The Bible Baptist Church"}, {"name": "Joaquin Agustin", "church": "The Bible Baptist Church"}, {"name": "Dwight Marcelo", "church": "The Bible Baptist Church"}, {"name": "Alliyah Cruz", "church": "The Bible Baptist Church"}, {"name": "John Amos Javier", "church": "The Bible Baptist Church"}, {"name": "Jessica Samson", "church": "The Bible Baptist Church"}, {"name": "Knch Hyacinth Malayao", "church": "The Bible Baptist Church"}, {"name": "Diuzdean Paul Zabala", "church": "The Bible Baptist Church"}, {"name": "Angela Mae David", "church": "The Bible Baptist Church"}, {"name": "Nathan James Zaragosa", "church": "The Bible Baptist Church"}, {"name": "Hullin Jamin Santillan", "church": "The Bible Baptist Church"}, {"name": "Dave Matthew Marcelo", "church": "The Bible Baptist Church"}, {"name": "Philip Tejada", "church": "The Bible Baptist Church"}, {"name": "Jasper Ian Samson", "church": "The Bible Baptist Church"}, {"name": "Kielle Daffon", "church": "The Bible Baptist Church"}, {"name": "Tyler Marchan", "church": "The Bible Baptist Church"}, {"name": "Jhenelle Grace Bongcras", "church": "The Bible Baptist Church"}, {"name": "Caleb Joshua Yenko", "church": "The Bible Baptist Church"}, {"name": "Mavy Hullar", "church": "The Bible Baptist Church"}, {"name": "Louie Gabriel B. Entac", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Romie Rey C. Villanueva", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Reina Mae Cabalpin Villanueva", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Franklin Villamil", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Shiela Villamil", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Jairus A. Cabalpin", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Von A. Cabalpin", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Jaira A. Cabalpin", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Arthea Cassandra B. Entac", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Rex Barruga", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Allen", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Jc", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Kristine", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Rojine Tolentino", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Roger Tolentino", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Shane Rebancos", "church": "Valley View Bible Baptist Church Lighthouse"}, {"name": "Joash Solomon", "church": "The Bible Baptist Church"}, {"name": "Rebeccah", "church": "God First Bible Baptist Church"}, {"name": "Archelle", "church": "God First Bible Baptist Church"}, {"name": "Aaliyah", "church": "God First Bible Baptist Church"}, {"name": "Arwin", "church": "God First Bible Baptist Church"}, {"name": "Aron", "church": "God First Bible Baptist Church"}, {"name": "Nelson", "church": "God First Bible Baptist Church"}, {"name": "Xhacie", "church": "God First Bible Baptist Church"}, {"name": "Shoti", "church": "God First Bible Baptist Church"}, {"name": "Jyrus", "church": "God First Bible Baptist Church"}, {"name": "Jaron", "church": "God First Bible Baptist Church"}, {"name": "Jemuel", "church": "God First Bible Baptist Church"}, {"name": "CJ", "church": "God First Bible Baptist Church"}, {"name": "Caryl", "church": "God First Bible Baptist Church"}, {"name": "Ronan", "church": "God First Bible Baptist Church"}, {"name": "Red", "church": "God First Bible Baptist Church"}, {"name": "EJ", "church": "God First Bible Baptist Church"}, {"name": "Benimie", "church": "God First Bible Baptist Church"}, {"name": "Ann", "church": "God First Bible Baptist Church"}, {"name": "Geriel Timothy Mateo", "church": "Cornerstone Bible Baptist Church"}, {"name": "Gerlin Rachel Mateo", "church": "Cornerstone Bible Baptist Church"}, {"name": "Gelin Jemima Mateo", "church": "Cornerstone Bible Baptist Church"}, {"name": "Fatima Faith Baltazar", "church": "Cornerstone Bible Baptist Church"}, {"name": "Gian Francis Baltazar", "church": "Cornerstone Bible Baptist Church"}, {"name": "Valerie Hill Baltazar", "church": "Cornerstone Bible Baptist Church"}, {"name": "Jessamine Bautista", "church": "Cornerstone Bible Baptist Church"}, {"name": "Chloe Grace Aquino", "church": "Cornerstone Bible Baptist Church"}, {"name": "Azenny Fame Mugot", "church": "Cornerstone Bible Baptist Church"}, {"name": "Axejia Jexial Romero", "church": "Cornerstone Bible Baptist Church"}, {"name": "Hannah Mae Flaviano", "church": "Cornerstone Bible Baptist Church"}, {"name": "Shiela Mae Aquino", "church": "Cornerstone Bible Baptist Church"}, {"name": "Nikka Althea Belarmino", "church": "Cornerstone Bible Baptist Church"}, {"name": "Alaiza Denise Armero", "church": "Cornerstone Bible Baptist Church"}, {"name": "Charmaine Magat", "church": "Cornerstone Bible Baptist Church"}, {"name": "Vethani Loise Jamlang", "church": "Cornerstone Bible Baptist Church"}, {"name": "Venice Liane Jamlang", "church": "Cornerstone Bible Baptist Church"}, {"name": "Ayomi Victoriano", "church": "Cornerstone Bible Baptist Church"}, {"name": "Shalom Pacia", "church": "Cornerstone Bible Baptist Church"}, {"name": "John Andrei Detubio", "church": "Cornerstone Bible Baptist Church"}, {"name": "John Mark Espenilla", "church": "Cornerstone Bible Baptist Church"}, {"name": "John Michael Alcantara", "church": "Cornerstone Bible Baptist Church"}, {"name": "Reinald Esquivel", "church": "Cornerstone Bible Baptist Church"}, {"name": "Matthew Cada", "church": "Cornerstone Bible Baptist Church"}, {"name": "Seth Caleb Mugot", "church": "Cornerstone Bible Baptist Church"}, {"name": "Junna Liza Pereyra", "church": "North Caloocan Bible Baptist Church"}, {"name": "Mark Francis Santo", "church": "North Caloocan Bible Baptist Church"}, {"name": "Justine Paul Ogatis", "church": "North Caloocan Bible Baptist Church"}, {"name": "Aljhea Andrada", "church": "North Caloocan Bible Baptist Church"}, {"name": "Maria Magdalena Paguinto", "church": "North Caloocan Bible Baptist Church"}, {"name": "Jed Lois Reyes", "church": "Heritage Bible Baptist Church"}, {"name": "Johnrick Reyes", "church": "Heritage Bible Baptist Church"}, {"name": "Ramah Gabrielle Fabros", "church": "Heritage Bible Baptist Church"}, {"name": "Hotter Joule Zinampan", "church": "Heritage Bible Baptist Church"}, {"name": "Nepthune John Balino", "church": "Heritage Bible Baptist Church"}, {"name": "Shantelle Arias Alemanza", "church": "Heritage Bible Baptist Church"}, {"name": "Arvin James Tan", "church": "Heritage Bible Baptist Church"}, {"name": "Renz Andrew Dimacali", "church": "Heritage Bible Baptist Church"}, {"name": "Rizza Mae Cruz", "church": "Heritage Bible Baptist Church"}, {"name": "Bea Marie Azuela", "church": "Heritage Bible Baptist Church"}, {"name": "Angel Barriga", "church": "Heritage Bible Baptist Church"}, {"name": "Paul Matt Manzo", "church": "Heritage Bible Baptist Church"}, {"name": "Denisse Dean Ocampo", "church": "Heritage Bible Baptist Church"}, {"name": "Jennel Recio", "church": "Heritage Bible Baptist Church"}, {"name": "Caleb Andrei Rodriguez", "church": "Heritage Bible Baptist Church"}, {"name": "Cristal Jane Dalma", "church": "Heritage Bible Baptist Church"}, {"name": "Jabez Ramil Vizcaya", "church": "Heritage Bible Baptist Church"}, {"name": "Justin Velasco", "church": "Heritage Bible Baptist Church"}, {"name": "John Charles Bacares", "church": "Heritage Bible Baptist Church"}, {"name": "Christian John Barriga", "church": "Heritage Bible Baptist Church"}, {"name": "Kishi Fabros", "church": "Heritage Bible Baptist Church"}, {"name": "Neon Bryan Reyes", "church": "Heritage Bible Baptist Church"}, {"name": "Samuel Joseph Manlapig", "church": "Heritage Bible Baptist Church"}, {"name": "John Kenneth Pilar", "church": "Heritage Bible Baptist Church"}, {"name": "Leihram Fabros", "church": "Heritage Bible Baptist Church"}, {"name": "Gerlie Mae Recio", "church": "Heritage Bible Baptist Church"}, {"name": "Zabrina Pijana", "church": "Heritage Bible Baptist Church"}, {"name": "Jenny Mae Santiago", "church": "Heritage Bible Baptist Church"}, {"name": "John Ray Santiago", "church": "Heritage Bible Baptist Church"}, {"name": "Johrel Louie T. Silao", "church": "Countryside Baptist Church"}, {"name": "James Benedict C. Arado", "church": "Muzon Christ Baptist Church"}, {"name": "Warren M. Jabolin", "church": "New Life Baptist Church"}, {"name": "JM Lucenesio", "church": "Asia Baptist Bible Church"}, {"name": "Shem Dalisay", "church": "Asia Baptist Bible Church"}, {"name": "Katrina Heramis", "church": "Asia Baptist Bible Church"}, {"name": "Kyohie Cutamora", "church": "Asia Baptist Bible Church"}, {"name": "James Lucenesio", "church": "Asia Baptist Bible Church"}, {"name": "Shekinah Dalisay", "church": "Asia Baptist Bible Church"}, {"name": "Hannah Borja", "church": "Asia Baptist Bible Church"}, {"name": "Shiloh Dalisay", "church": "Asia Baptist Bible Church"}, {"name": "Aizel Sarting", "church": "Asia Baptist Bible Church"}, {"name": "Reighne Cutamora", "church": "Asia Baptist Bible Church"}, {"name": "Liane Gheriel Lucenesio", "church": "Asia Baptist Bible Church"}, {"name": "CJ Nero", "church": "Asia Baptist Bible Church"}, {"name": "Lavine Genzel Lucenesio", "church": "Asia Baptist Bible Church"}, {"name": "Princess Nero", "church": "Asia Baptist Bible Church"}, {"name": "Russell Cutamora", "church": "Asia Baptist Bible Church"}, {"name": "Donna Tagacay", "church": "Asia Baptist Bible Church"}, {"name": "Andy Cutamora", "church": "Asia Baptist Bible Church"}, {"name": "Benaiah Arnejo", "church": "Gethsemane Bible Baptist Church"}, {"name": "Vaughn Rubio", "church": "Gethsemane Bible Baptist Church"}, {"name": "Jasper Dela Plaza", "church": "Gethsemane Bible Baptist Church"}, {"name": "Aurie Contado", "church": "Gethsemane Bible Baptist Church"}, {"name": "Mary Rose Arnigo", "church": "Gethsemane Bible Baptist Church"}, {"name": "Nillericsson Calibot", "church": "Gethsemane Bible Baptist Church"}, {"name": "Benjamin bolante", "church": "Gethsemane Bible Baptist Church"}, {"name": "Karen Dognidon", "church": "Gethsemane Bible Baptist Church"}, {"name": "Elijah Avila", "church": "Gethsemane Bible Baptist Church"}, {"name": "Mylyn Ayacocho", "church": "Gethsemane Bible Baptist Church"}, {"name": "Jenny Castañares", "church": "Gethsemane Bible Baptist Church"}, {"name": "Mickaela Basa", "church": "Gethsemane Bible Baptist Church"}, {"name": "Angel Romano", "church": "Gethsemane Bible Baptist Church"}, {"name": "Ram Abogadie", "church": "Gethsemane Bible Baptist Church"}, {"name": "Anya Escuadra", "church": "Gethsemane Bible Baptist Church"}, {"name": "Ezekiel Avila", "church": "Gethsemane Bible Baptist Church"}, {"name": "Sarah Matias", "church": "Gethsemane Bible Baptist Church"}, {"name": "Christian Tarog", "church": "Gethsemane Bible Baptist Church"}, {"name": "Joseph Dognidon", "church": "Gethsemane Bible Baptist Church"}, {"name": "Rogel Castañares", "church": "Gethsemane Bible Baptist Church"}, {"name": "MJ Yboa", "church": "Gethsemane Bible Baptist Church"}, {"name": "Jonas Saragosala", "church": "Gethsemane Bible Baptist Church"}, {"name": "Ptr. Bong Bernales", "church": "Zion Bible Baptist Church"}, {"name": "Jesse Bernales", "church": "Zion Bible Baptist Church"}, {"name": "Lian Bernales", "church": "Zion Bible Baptist Church"}, {"name": "Jillian Bernales", "church": "Zion Bible Baptist Church"}, {"name": "Lance Bernales", "church": "Zion Bible Baptist Church"}, {"name": "Marvin Caleda", "church": "Cornerstone Bible Baptist Church"}, {"name": "Joo Quitquitan", "church": "Gospel Christian Baptist Church - General Trias"}, {"name": "Peñaranda, Queben C.", "church": "Living Water Baptist Church"}, {"name": "Peñaranda, Brendelle C.", "church": "Living Water Baptist Church"}, {"name": "Austria, Mac Zigen B.", "church": "Living Water Baptist Church"}, {"name": "Jhared Malaga", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Princess Escabal", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Charlie Monteloyola", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Bro. Lenard", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Bro. Jaycee", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Bro. Ariel", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Bro. David", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Bro. TJ", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Bro. BM", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Bro. Jufran", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Bro. Archie", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Sis. Ruth", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Sis. Ella", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Sis. Maxine", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Sis. Shanelle", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Sis. Joy", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Sis. Irene", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Sis. Irish", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Sis. Ave", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Sis. Kim", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Bro. Yuri", "church": "Moriah Baptist Bible Church (Tumana)"}, {"name": "Aron Nasi", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Irene Casyao", "church": "Gethsemane Bible Baptist Church"}, {"name": "Sarah Jimenez", "church": "Gethsemane Bible Baptist Church"}, {"name": "Hannah Evan", "church": "Zion Bible Baptist Church"}, {"name": "Briana Jacobo", "church": "Zion Bible Baptist Church"}, {"name": "Ding Evan", "church": "Zion Bible Baptist Church"}, {"name": "Barcibal, Rainne Cloud", "church": "Living Water Baptist Church"}, {"name": "Peñaranda, Quenbie C.", "church": "Living Water Baptist Church"}, {"name": "Peñaranda, Queency Brendle C.", "church": "Living Water Baptist Church"}, {"name": "LAMBOLOTO, KYRRA RED FAHRENHEIT A.", "church": "Living Water Baptist Church"}, {"name": "Gonzales, Mishrelle G.", "church": "Living Water Baptist Church"}, {"name": "Dazzel Jabez Panganiban", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Asa Ysela Kitan", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Elijah Dacillo", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Emmanuel Gloria", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Janelle Dacillo", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Jemuel Gamboa", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Jeremiah Gloria", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Jesther Dannug", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Rahm Abrigo", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Marco Jose Revilla", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Mexie Panganiban", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Nehemiah Dacillo", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Rae Tansingco", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Reyn Abrigo", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Joshua Panganiban", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Sam Panganiban", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Elizabeth Binay", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Ellea Binay", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Elthea Binay", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Bryce Abordo", "church": "The Bible Baptist Church"}, {"name": "Natasha Magsayo", "church": "The Bible Baptist Church"}, {"name": "Alexa Romero", "church": "The Bible Baptist Church"}, {"name": "Chelsey Palomino", "church": "The Bible Baptist Church"}, {"name": "Geoffrey Gomboc", "church": "The Bible Baptist Church"}, {"name": "Diadem Perez", "church": "The Bible Baptist Church"}, {"name": "Charles Dela Cruz", "church": "The Bible Baptist Church"}, {"name": "Flores, Niña Chrizalyn Anne Q.", "church": "Living Water Baptist Church"}, {"name": "Almeria, Joven F.", "church": "Living Water Baptist Church"}, {"name": "Dungo, Marc John PE", "church": "Living Water Baptist Church"}, {"name": "Juan Carlos R. Tayag", "church": "Diadem Baptist Bible Church"}, {"name": "Kenneth Cabuhat", "church": "Diadem Baptist Bible Church"}, {"name": "Jemcar Rosallosa", "church": "Diadem Baptist Bible Church"}, {"name": "Daryl David Danque", "church": "Diadem Baptist Bible Church"}, {"name": "Tracy Fabian", "church": "Diadem Baptist Bible Church"}, {"name": "Dylyn Asma", "church": "Diadem Baptist Bible Church"}, {"name": "Danica Mae S. Dico", "church": "Diadem Baptist Bible Church"}, {"name": "John Louie Reyes", "church": "Diadem Baptist Bible Church"}, {"name": "Arjalla Sajulan", "church": "Diadem Baptist Bible Church"}, {"name": "John Rafael Sajulan", "church": "Diadem Baptist Bible Church"}, {"name": "Job Danniell Divine", "church": "Diadem Baptist Bible Church"}, {"name": "Samuel Cantor", "church": "Diadem Baptist Bible Church"}, {"name": "LJ Montenegro", "church": "Bible Baptist Church Bulacan"}, {"name": "Donna Inocencio", "church": "Bible Baptist Church Bulacan"}, {"name": "Princessa Xyra Castro", "church": "Bible Baptist Church Bulacan"}, {"name": "Prince Xyrus Castro", "church": "Bible Baptist Church Bulacan"}, {"name": "Edwin Mamerto", "church": "Bible Baptist Church Bulacan"}, {"name": "Drei Samper", "church": "Bible Baptist Church Bulacan"}, {"name": "Gabriel Allen Cano", "church": "Word of Life Baptist Church"}, {"name": "Marc Ezra Cano", "church": "Word of Life Baptist Church"}, {"name": "Arrienne Faith Cano", "church": "Word of Life Baptist Church"}, {"name": "Precious Dianne Remegio", "church": "Word of Life Baptist Church"}, {"name": "Arian Dee Remegio", "church": "Word of Life Baptist Church"}, {"name": "John David Remegio", "church": "Word of Life Baptist Church"}, {"name": "Rodnie Canapi", "church": "Word of Life Baptist Church"}, {"name": "Wilson Jeuz Gonzales", "church": "Word of Life Baptist Church"}, {"name": "Daniel Mark Remegio", "church": "Word of Life Baptist Church"}, {"name": "Reign David C. Ponciano", "church": "Word of Life Baptist Church"}, {"name": "Bien Arana", "church": "Cornerstone Bible Baptist Church"}, {"name": "Herner Cadahing", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Lemuel Abalos", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Rudylyn  Cebrero", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Leah Abalos", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Leshem Abalos", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Mica Jamero", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Ellaine Bazan", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Joannah De Leon", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Alejoh  Alkuino", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Ejaymark Arevalo", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Jessieren Cueva", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Steven Vinas", "church": "Batasan Hills Bible Baptist Church"}, {"name": "John Erwin Bazan", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Aizha  Jamero", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Welhem De Leon Jr.", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Harlyn Cadahing", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Hernanie Cadahing", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Vanessa Bazan", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Alejiah Alkuino", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Hannah Cueva", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Japhet  Cueva", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Earl John Salem", "church": "Batasan Hills Bible Baptist Church"}, {"name": "Enad Hugh Marcial", "church": "Muzon Christ Baptist Church"}, {"name": "Austria, Raina Margarette B.", "church": "Living Water Baptist Church"}, {"name": "Bartolome, Joeven Kurt E.", "church": "Living Water Baptist Church"}, {"name": "Aimee Jean Dacillo", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Azalea Zoe Tugano", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Cherry Brutas", "church": "Moriah Baptist Church (Marikina - Main)"}, {"name": "Michaela Faith Malonzo", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Beulah Kitan", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Leizel Abenes Calamaya", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Abdiel Kitan", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Krisha Anne J. Domalaon", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Debbie Gallardo", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Ryesa Maala", "church": "Community Baptist Bible Church Quezon City"}, {"name": "Jamon, Clioel Job, N.", "church": "Living Water Baptist Church"}, {"name": "Jamon, Lizeth Jan N.", "church": "Living Water Baptist Church"}, {"name": "Jerahmeel Fabian", "church": "Diadem Baptist Bible Church"}, {"name": "Joemarie B. Arizala", "church": "Diadem Baptist Bible Church"}, {"name": "Sanchez, Althea A.", "church": "Living Water Baptist Church"}, {"name": "Molano, Russel Babe P.", "church": "Living Water Baptist Church"}, {"name": "Kilat, Jemimah Christine", "church": "Living Water Baptist Church"}, {"name": "Preciosa Yunice Magnifico", "church": "Living Water Baptist Church"}];

// =============================================
// STATE
// =============================================
let allRegistrants = []; // working list (CSV + added members)
let pickedMembers = JSON.parse(localStorage.getItem('y121_pickedMembers')) || [];
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
    startChurchWheel();
    renderWinnersList();
    showPage('page-wheel');
});
document.getElementById('btn-data-back').addEventListener('click', () => showPage('page-landing'));
document.getElementById('btn-data-to-wheel').addEventListener('click', () => {
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

        const fields = parseCSVLine(line);
        if (fields.length < 2) continue;

        const name = fields[0].trim();
        const church = fields[1].trim();

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
                i++;
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
// CSV IMPORT (replaces list)
// =============================================
const csvFileInput = document.getElementById('csv-file-input');
const csvStatus = document.getElementById('csv-status');

csvFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
        const text = evt.target.result;
        const parsed = parseCSV(text);

        if (parsed.length === 0) {
            csvStatus.textContent = '⚠ No valid registrants found in file.';
            csvStatus.className = 'csv-status csv-status--error';
            return;
        }

        allRegistrants = parsed;
        saveRegistrants();

        const uniqueChurches = [...new Set(allRegistrants.map(r => r.church))];
        csvStatus.textContent = `✓ Replaced list: ${allRegistrants.length} registrants from ${uniqueChurches.length} churches`;
        csvStatus.className = 'csv-status csv-status--success';

        renderList();
        updateStats();
    };
    reader.readAsText(file);
});

// =============================================
// PERSISTENCE
// =============================================
function saveRegistrants() {
    localStorage.setItem('y121_allRegistrants', JSON.stringify(allRegistrants));
}

function savePicked() {
    localStorage.setItem('y121_pickedMembers', JSON.stringify(pickedMembers));
    localStorage.setItem('y121_pickedChurchesRound', JSON.stringify(pickedChurchesThisRound));
}

// Load on startup — use localStorage if available, otherwise fall back to built-in CSV
(function loadOnStartup() {
    const saved = localStorage.getItem('y121_allRegistrants');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.length > 0) {
                allRegistrants = parsed;
            } else {
                allRegistrants = BUILTIN_REGISTRANTS.map(r => ({ ...r }));
                saveRegistrants();
            }
        } catch (e) {
            allRegistrants = BUILTIN_REGISTRANTS.map(r => ({ ...r }));
            saveRegistrants();
        }
    } else {
        // First load — use the built-in CSV data
        allRegistrants = BUILTIN_REGISTRANTS.map(r => ({ ...r }));
        saveRegistrants();
    }

    const uniqueChurches = [...new Set(allRegistrants.map(r => r.church))];
    csvStatus.textContent = `✓ ${allRegistrants.length} registrants loaded (${uniqueChurches.length} churches)`;
    csvStatus.className = 'csv-status csv-status--success';

    renderList();
    updateStats();
})();

// =============================================
// EXPORT CSV
// =============================================
document.getElementById('btn-export-csv').addEventListener('click', () => {
    const lines = ['Name,Church'];
    allRegistrants.forEach(r => {
        const name = r.name.includes(',') ? `"${r.name}"` : r.name;
        const church = r.church.includes(',') ? `"${r.church}"` : r.church;
        lines.push(`${name},${church}`);
    });
    const blob = new Blob([lines.join('\r\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'registration_list.csv';
    a.click();
    URL.revokeObjectURL(url);
});

// =============================================
// ADD MEMBER MODAL
// =============================================
const modalAdd = document.getElementById('modal-add');
const selectChurch = document.getElementById('select-church');
const otherChurchGroup = document.getElementById('other-church-group');
const inputOtherChurch = document.getElementById('input-other-church');
const inputName = document.getElementById('input-name');
const addMemberError = document.getElementById('add-member-error');

function getUniqueChurchesSorted() {
    return [...new Set(allRegistrants.map(r => r.church))].sort((a, b) => a.localeCompare(b));
}

function populateChurchDropdown() {
    const churches = getUniqueChurchesSorted();
    selectChurch.innerHTML = churches.map(c =>
        `<option value="${c.replace(/"/g, '&quot;')}">${c}</option>`
    ).join('') + '<option value="__other__">— Other church —</option>';
}

selectChurch.addEventListener('change', () => {
    if (selectChurch.value === '__other__') {
        otherChurchGroup.style.display = 'flex';
        inputOtherChurch.focus();
    } else {
        otherChurchGroup.style.display = 'none';
        inputOtherChurch.value = '';
    }
});

document.getElementById('btn-add-member').addEventListener('click', () => {
    populateChurchDropdown();
    inputName.value = '';
    inputOtherChurch.value = '';
    otherChurchGroup.style.display = 'none';
    addMemberError.textContent = '';
    modalAdd.classList.add('active');
    setTimeout(() => inputName.focus(), 100);
});

document.getElementById('btn-add-cancel').addEventListener('click', () => {
    modalAdd.classList.remove('active');
});

// Close on backdrop click
modalAdd.addEventListener('click', (e) => {
    if (e.target === modalAdd) modalAdd.classList.remove('active');
});

document.getElementById('btn-add-confirm').addEventListener('click', () => {
    const name = inputName.value.trim();
    let church = selectChurch.value === '__other__'
        ? inputOtherChurch.value.trim()
        : selectChurch.value;

    addMemberError.textContent = '';

    if (!name) {
        addMemberError.textContent = 'Please enter a name.';
        inputName.focus();
        return;
    }
    if (!church) {
        addMemberError.textContent = 'Please enter a church name.';
        inputOtherChurch.focus();
        return;
    }

    // Check for exact duplicate
    const isDuplicate = allRegistrants.some(
        r => r.name.toLowerCase() === name.toLowerCase() && r.church.toLowerCase() === church.toLowerCase()
    );
    if (isDuplicate) {
        addMemberError.textContent = 'This member already exists in the list.';
        return;
    }

    allRegistrants.push({ name, church, isNew: true });
    saveRegistrants();
    renderList();
    updateStats();
    modalAdd.classList.remove('active');

    // Show brief confirmation
    csvStatus.textContent = `✓ Added "${name}" to ${church}`;
    csvStatus.className = 'csv-status csv-status--success';
});

// Allow Enter key in form inputs
inputName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('btn-add-confirm').click();
});
inputOtherChurch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('btn-add-confirm').click();
});

// =============================================
// HELPERS
// =============================================
function isMemberPicked(name, church) {
    return pickedMembers.some(p => p.name === name && p.church === church);
}

function getAvailableChurches() {
    return [...new Set(
        allRegistrants
            .filter(r => !isMemberPicked(r.name, r.church))
            .map(r => r.church)
    )];
}

function getChurchesForWheel() {
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
// REGISTRANT LIST
// =============================================
function renderList() {
    const list = document.getElementById('registrant-list');
    if (allRegistrants.length === 0) {
        list.innerHTML = '<p class="empty-state">No registrants loaded. Upload a CSV above.</p>';
        return;
    }

    list.innerHTML = allRegistrants.map((r) => {
        const picked = isMemberPicked(r.name, r.church);
        const badge = picked
            ? '<span class="item-picked-badge">✓ Picked</span>'
            : r.isNew
                ? '<span class="item-new-badge">✦ New</span>'
                : '';
        return `
        <div class="registrant-item ${picked ? 'registrant-item--picked' : ''}">
            <div class="item-info">
                <span class="item-name">${r.name}</span>
                <span class="item-church">${r.church}</span>
            </div>
            ${badge}
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

    if (availableChurches.length === 0) {
        wheelData = [];
        currentAngle = 0;
        drawWheel(wheelData, currentAngle);
        updateRoundInfo();
        document.getElementById('modal-done').classList.add('active');
        return;
    }

    let churchesForWheel = getChurchesForWheel();

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
            pickedMembers.push({ name: winner.value.name, church: winner.value.church });
            savePicked();
            closeModal();
            renderWinnersList();
            startChurchWheel();
        };
    }

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

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
