const data = [
    {
        driverId: "ver",
        driverPos: "1",
        driverFname: "Max",
        driverLname: "Verstappen",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/MaxVerstappen.png",
        team: "Red Bull Racing",
        country: "Netherlands",
        podium: "92",
        points: "2411.5",
        grandprixe: "179",
        worldc: "2",
        highestrf: "1 (x48)",
        pob: "Hasselt, Belgium"
    },
    {
        driverId: "per",
        driverPos: "2",
        driverFname: "Sergio",
        driverLname: "Perez",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/SergioPerez.png",
        team: "Red Bull Racing",
        country: "Mexico",
        podium: "34",
        points: "1425",
        grandprixe: "253",
        worldc: "N/A",
        highestrf: "1 (x6)",
        pob: "Guadalajara, Mexico"
    },
    {
        driverId: "ham",
        driverPos: "3",
        driverFname: "Lewis",
        driverLname: "Hamilton",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/LewisHamilton.png",
        team: "Mercedes",
        country: "United Kingdom",
        podium: "196",
        points: "4599.5",
        grandprixe: "327",
        worldc: "7",
        highestrf: "1 (x103)",
        pob: "Stevenage, England"
    },
    {
        driverId: "alo",
        driverPos: "4",
        driverFname: "Fernando",
        driverLname: "Alonso",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/FernandoAlonso.png",
        team: "Aston Martin",
        country: "Spain",
        podium: "105",
        points: "2244",
        grandprixe: "375",
        worldc: "2",
        highestrf: "1 (x32)",
        pob: "Oviedo, Spain"
    },
    {
        driverId: "sai",
        driverPos: "5",
        driverFname: "Carlos",
        driverLname: "Sainz",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/CarlosSainz.png",
        team: "Ferrari",
        country: "Spain",
        podium: "17",
        points: "935.5",
        grandprixe: "180",
        worldc: "N/A",
        highestrf: "1 (x2)",
        pob: "Madrid, Spain"
    },
    {
        driverId: "lec",
        driverPos: "6",
        driverFname: "Charles",
        driverLname: "Leclerc",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/CharlesLeclerc.png",
        team: "Ferrari",
        country: "Monaco",
        podium: "27",
        points: "1013",
        grandprixe: "120",
        worldc: "N/A",
        highestrf: "1 (x5)",
        pob: "Monte Carlo, Monaco"
    },
    {
        driverId: "nor",
        driverPos: "7",
        driverFname: "Lando",
        driverLname: "Norris",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/LandoNorris.png",
        team: "McLaren",
        country: "United Kingdom",
        podium: "11",
        points: "564",
        grandprixe: "99",
        worldc: "N/A",
        highestrf: "2 (x5)",
        pob: "Bristol, England"
    },
    {
        driverId: "rus",
        driverPos: "8",
        driverFname: "George",
        driverLname: "Russell",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/GeorgeRussell.png",
        team: "Mercedes",
        country: "United Kingdom",
        podium: "10",
        points: "426",
        grandprixe: "99",
        worldc: "N/A",
        highestrf: "1 (x1)",
        pob: "King's Lynn, England"
    },
    {
        driverId: "pia",
        driverPos: "9",
        driverFname: "Oscar",
        driverLname: "Piastri",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/OscarPiastri.png",
        team: "McLaren",
        country: "Australia",
        podium: "2",
        points: "83",
        grandprixe: "17",
        worldc: "N/A",
        highestrf: "2 (x1)",
        pob: "Melbourne, Victoria"
    },
    {
        driverId: "str",
        driverPos: "10",
        driverFname: "Lance",
        driverLname: "Stroll",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/LanceStroll.png",
        team: "Aston Martin",
        country: "Canada",
        podium: "3",
        points: "241",
        grandprixe: "138",
        worldc: "N/A",
        highestrf: "3 (x3)",
        pob: "Montreal, Canada"
    },
    {
        driverId: "gas",
        driverPos: "11",
        driverFname: "Pierre",
        driverLname: "Gasly",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/PierreGasly.png",
        team: "Alpine",
        country: "France",
        podium: "4",
        points: "378",
        grandprixe: "125",
        worldc: "N/A",
        highestrf: "1 (x1)",
        pob: "Rouen, France"
    },
    {
        driverId: "oco",
        driverPos: "12",
        driverFname: "Esteban",
        driverLname: "Ocon",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/EstebanOcon.png",
        team: "Alpine",
        country: "France",
        podium: "3",
        points: "408",
        grandprixe: "128",
        worldc: "N/A",
        highestrf: "1 (x1)",
        pob: "Évreux, Normandy"
    },
    {
        driverId: "alb",
        driverPos: "13",
        driverFname: "Alexander",
        driverLname: "Albon",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/AlexanderAlbon.png",
        team: "Williams",
        country: "Thailand",
        podium: "2",
        points: "224",
        grandprixe: "76",
        worldc: "N/A",
        highestrf: "3 (x2)",
        pob: "London, England"
    },
    {
        driverId: "bot",
        driverPos: "14",
        driverFname: "Valtteri",
        driverLname: "Bottas",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/ValtteriBottas.png",
        team: "Alfa Romeo",
        country: "Finland",
        podium: "67",
        points: "1797",
        grandprixe: "217",
        worldc: "N/A",
        highestrf: "1 (x0)",
        pob: "Nastola, Finland"
    },
    {
        driverId: "hul",
        driverPos: "15",
        driverFname: "Nico",
        driverLname: "Hulkenberg",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/NicoHulkenberg.png",
        team: "Haas F1 Team",
        country: "Germany",
        podium: "N/A",
        points: "530",
        grandprixe: "201",
        worldc: "N/A",
        highestrf: "4 (x3)",
        pob: "Emmerich am Rhein, Germany"
    },
    {
        driverId: "gua",
        driverPos: "16",
        driverFname: "Zhou",
        driverLname: "Guanyu",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/ZhouGuanyu.png",
        team: "Alfa Romeo",
        country: "China",
        podium: "N/A",
        points: "12",
        grandprixe: "39",
        worldc: "N/A",
        highestrf: "8 (x1)",
        pob: "Shanghai, China"
    },
    {
        driverId: "tsu",
        driverPos: "17",
        driverFname: "Yuki",
        driverLname: "Tsunoda",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/YukiTsunoda.png",
        team: "AlphaTauri",
        country: "Japan",
        podium: "N/A",
        points: "47",
        grandprixe: "61",
        worldc: "N/A",
        highestrf: "4 (x1)",
        pob: "Sagamihara, Japan"
    },
    {
        driverId: "mag",
        driverPos: "18",
        driverFname: "Kevin",
        driverLname: "Magnussen",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/KevinMagnussen.png",
        team: "Haas F1 Team",
        country: "Denmark",
        podium: "1",
        points: "186",
        grandprixe: "159",
        worldc: "N/A",
        highestrf: "2 (x1)",
        pob: "Roskilde, Denmark"
    },
    {
        driverId: "law",
        driverPos: "19",
        driverFname: "Liam",
        driverLname: "Lawson",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/LiamLawson.png",
        team: "AlphaTauri",
        country: "New Zealand",
        podium: "N/A",
        points: "2",
        grandprixe: "18",
        worldc: "N/A",
        highestrf: "9 (x1)",
        pob: "Hastings, New Zealand"
    },
    {
        driverId: "sar",
        driverPos: "20",
        driverFname: "Logan",
        driverLname: "Sargeant",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/LoganSargeant.png",
        team: "Williams",
        country: "United States",
        podium: "N/A",
        points: "0",
        grandprixe: "17",
        worldc: "N/A",
        highestrf: "11 (x1)",
        pob: "Fort Lauderdale, Florida"
    },
    {
        driverId: "dev",
        driverPos: "21",
        driverFname: "Nyck",
        driverLname: "De Vries",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/NickDeVries.png",
        team: "AlphaTauri",
        country: "Netherlands",
        podium: "N/A",
        points: "0",
        grandprixe: "18",
        worldc: "N/A",
        highestrf: "12 (x1)",
        pob: "Uitwellingerga, Netherlands"
    },
    {
        driverId: "ric",
        driverPos: "22",
        driverFname: "Daniel",
        driverLname: "Ricciardo",
        driverImg: "/src/assets/Constructors/Logo/Detailed/Drivers/DanielRicciardo.png",
        team: "AlphaTauri",
        country: "Australia",
        podium: "32",
        points: "1311",
        grandprixe: "234",
        worldc: "N/A",
        highestrf: "1 (x8)",
        pob: "Perth, Australia"
    }

]

const search = window.location.search.slice(1).split('&');
const did = search.find((s) => s.startsWith('did')).split('=')[1];
const driver = data.find((d) => d.driverId === did);

document.getElementById('mc').innerHTML = `
        <div class="data">
            <div class="div-left">
                <table class="row1">
                    <tr>
                        <td class="driver-position">${driver.driverPos}</td>
                        <td class="driver-flag">
                            <img src="/src/assets/Flags/${driver.country}.png" alt="Netherlands" class='driver-flag'>
                        </td>
                    </tr>
                    <tr>
                        <td class="driver-name">
                            <p class="driver-fname">${driver.driverFname}</p>
                            <p class="driver-lname">${driver.driverLname}</p>
                        </td>
                    </tr>
                </table>

                <table class="info">
                    <tr>
                        <td class="info-left">Team</td>
                        <td class="info-divider">:</td>
                        <td class="info-right">${driver.team}</td>
                    </tr>
                    <tr>
                        <td class="info-left">Country</td>
                        <td class="info-divider">:</td>
                        <td class="info-right">${driver.country}</td>
                    </tr>
                    <tr>
                        <td class="info-left">Podium</td>
                        <td class="info-divider">:</td>
                        <td class="info-right">${driver.podium}</td>
                    </tr>
                    <tr>
                        <td class="info-left">Points</td>
                        <td class="info-divider">:</td>
                        <td class="info-right">${driver.points}</td>
                    </tr>
                    <tr>
                        <td class="info-left">Grand Prix Entered</td>
                        <td class="info-divider">:</td>
                        <td class="info-right">${driver.grandprixe}</td>
                    </tr>
                    <tr>
                        <td class="info-left">World Championships</td>
                        <td class="info-divider">:</td>
                        <td class="info-right">${driver.worldc}</td>
                    </tr>
                    <tr>
                        <td class="info-left">Highest Race Finish</td>
                        <td class="info-divider">:</td>
                        <td class="info-right">${driver.highestrf}</td>
                    </tr>
                    <tr>
                        <td class="info-left">Place of Birth</td>
                        <td class="info-divider">:</td>
                        <td class="info-right">${driver.pob}</td>
                    </tr>
                </table>
            </div>

            <img src="${driver.driverImg}" alt="Max Verstappen"
                class="driver-img">

        </div>`
