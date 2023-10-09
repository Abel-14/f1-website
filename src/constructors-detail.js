const data = [
    {
        teamId: 'redbull',
        teamName: "RED BULL RACING",
        teamLogo: "../assets/Constructors/Logo/Detailed/redbull_detailed.png",
        fullTeamName: "Oracle Red Bull Racing",
        base: "Milton Keynes, United Kingdom",
        teamChief: "Christian Horner",
        techChief: "Pierre Waché",
        chassis: "RB19",
        powerUnit: "Honda RBPT",
        firstEntry: "1997",
        wc: "6",
        highestFinish: "1 (x107)",
        polePositions: "94",
        fastestLaps: "93",

        d1: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/MaxVerstappen.png",
            fname: "Max",
            lname: "Verstappen",
            number: "1"
        },

        d2: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/SergioPerez.png",
            fname: "Sergio",
            lname: "Perez",
            number: "11"
        }

    },
    {
        teamId: 'mercedes',
        teamName: "MERCEDES",
        teamLogo: "../assets/Constructors/Logo/Detailed/mercedes_detailed.png",
        fullTeamName: "Mercedes-AMG PETRONAS F1 Team",
        base: "Brackley, United Kingdom",
        teamChief: "Toto Wolff",
        techChief: "James Allison",
        chassis: "W14",
        powerUnit: "Mercedes",
        firstEntry: "1970",
        wc: "8",
        highestFinish: "1 (x116)",
        polePositions: "129",
        fastestLaps: "95",

        d1: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/LewisHamilton.png",
            fname: "Lewis",
            lname: "Hamilton",
            number: "44"
        },

        d2: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/GeorgeRussell.png",
            fname: "George",
            lname: "Russell",
            number: "63"
        }

    },
    {
        teamId: 'ferrari',
        teamName: "FERRARI",
        teamLogo: "../assets/Constructors/Logo/Detailed/ferrari_detailed.png",
        fullTeamName: "Scuderia Ferrari",
        base: "Maranello, Italy",
        teamChief: "Frédéric Vasseur",
        techChief: "Enrico Cardile / Enrico Gualtieri",
        chassis: "SF-23",
        powerUnit: "Ferrari",
        firstEntry: "1950",
        wc: "16",
        highestFinish: "1 (x244)",
        polePositions: "247",
        fastestLaps: "259",

        d1: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/CharlesLeclerc.png",
            fname: "Charles",
            lname: "Leclerc",
            number: "16"
        },

        d2: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/CarlosSainz.png",
            fname: "Carlos",
            lname: "Sainz",
            number: "55"
        }

    },
    {
        teamId: 'astonmartin',
        teamName: "ASTON MARTIN",
        teamLogo: "../assets/Constructors/Logo/Detailed/aston_detailed.png",
        fullTeamName: "Aston Martin Aramco Cognizant F1 Team",
        base: "Silverstone, United Kingdom",
        teamChief: "Mike Krack",
        techChief: "Dan Fallows",
        chassis: "AMR23",
        powerUnit: "Mercedes",
        firstEntry: "2018",
        wc: "N/A",
        highestFinish: "1 (x1)",
        polePositions: "1",
        fastestLaps: "1",

        d1: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/FernandoAlonso.png",
            fname: "Fernando",
            lname: "Alonso",
            number: "14"
        },

        d2: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/LanceStroll.png",
            fname: "Lance",
            lname: "Stroll",
            number: "18"
        }

    },
    {
        teamId: 'mclaren',
        teamName: "MCLAREN",
        teamLogo: "../assets/Constructors/Logo/Detailed/mclaren_detailed.png",
        fullTeamName: "McLaren Formula 1 Team",
        base: "Woking, United Kingdom",
        teamChief: "Andrea Stella",
        techChief: "Peter Prodromou / Neil Houldey",
        chassis: "MCL60",
        powerUnit: "Mercedes",
        firstEntry: "1966",
        wc: "8",
        highestFinish: "1 (x183)",
        polePositions: "157",
        fastestLaps: "163",

        d1: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/LandoNorris.png",
            fname: "Lando",
            lname: "Norris",
            number: "4"
        },

        d2: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/OscarPiastri.png",
            fname: "Oscar",
            lname: "Piastri",
            number: "81"
        }

    },
    {
        teamId: 'alpine',
        teamName: "ALPINE",
        teamLogo: "../assets/Constructors/Logo/Detailed/alpine_detailed.png",
        fullTeamName: "BWT Alpine F1 Team",
        base: "Enstone, United Kingdom",
        teamChief: "Bruno Famin",
        techChief: "Matt Harman",
        chassis: "A523",
        powerUnit: "Renault",
        firstEntry: "1986",
        wc: "2",
        highestFinish: "1 (x21)",
        polePositions: "20",
        fastestLaps: "15",

        d1: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/PierreGasly.png",
            fname: "Pierre",
            lname: "Gasly",
            number: "10"
        },

        d2: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/EstebanOcon.png",
            fname: "Esteban",
            lname: "Ocon",
            number: "31"
        }

    },
    {
        teamId: 'williams',
        teamName: "WILLIAMS",
        teamLogo: "../assets/Constructors/Logo/Detailed/williams_detailed.png",
        fullTeamName: "Williams Racing",
        base: "Grove, United Kingdom",
        teamChief: "James Vowles",
        techChief: "TBC",
        chassis: "FW45",
        powerUnit: "Mercedes",
        firstEntry: "1978",
        wc: "9",
        highestFinish: "1 (x114)",
        polePositions: "128",
        fastestLaps: "133",

        d1: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/AlexanderAlbon.png",
            fname: "Alexander",
            lname: "Albon",
            number: "23"
        },

        d2: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/LoganSargeant.png",
            fname: "Logan",
            lname: "Sargeant",
            number: "2"
        }

    },
    {
        teamId: 'alfaromeo',
        teamName: "ALFA ROMEO",
        teamLogo: "../assets/Constructors/Logo/Detailed/alfaromeo_detailed.png",
        fullTeamName: "Alfa Romeo F1 Team Stake",
        base: "Hinwil, Switzerland",
        teamChief: "Alessandro Alunni Bravi",
        techChief: "James Key",
        chassis: "C43",
        powerUnit: "Ferrari",
        firstEntry: "1993",
        wc: "N/A",
        highestFinish: "1 (x1)",
        polePositions: "1",
        fastestLaps: "7",

        d1: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/ValtteriBottas.png",
            fname: "Valtteri",
            lname: "Bottas",
            number: "77"
        },

        d2: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/ZhouGuanyu.png",
            fname: "Zhou",
            lname: "Guanyu",
            number: "24"
        }

    },
    {
        teamId: 'haas',
        teamName: "HAAS",
        teamLogo: "../assets/Constructors/Logo/Detailed/haas_detailed.png",
        fullTeamName: "MoneyGram Haas F1 Team",
        base: "Kannapolis, United States",
        teamChief: "Guenther Steiner",
        techChief: "Simone Resta",
        chassis: "VF-23",
        powerUnit: "Ferrari",
        firstEntry: "2016",
        wc: "N/A",
        highestFinish: "4 (x1)",
        polePositions: "1",
        fastestLaps: "2",

        d1: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/KevinMagnussen.png",
            fname: "Kevin",
            lname: "Magnussen",
            number: "20"
        },

        d2: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/NicoHulkenberg.png",
            fname: "Nico",
            lname: "Hulkenberg",
            number: "27"
        }

    },
    {
        teamId: 'alphatauri',
        teamName: "ALPHATAURI",
        teamLogo: "../assets/Constructors/Logo/Detailed/alphatauri_detailed.png",
        fullTeamName: "Scuderia AlphaTauri",
        base: "Faenza, Italy",
        teamChief: "Franz Tost",
        techChief: "Jody Egginton",
        chassis: "AT04",
        powerUnit: "Honda RBPT",
        firstEntry: "1985",
        wc: "N/A",
        highestFinish: "1 (x2)",
        polePositions: "1",
        fastestLaps: "2",

        d1: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/YukiTsunoda.png",
            fname: "Yuki",
            lname: "Tsunoda",
            number: "22"
        },

        d2: {
            img: "../assets/Constructors/Logo/Detailed/Drivers/DanielRicciardo.png",
            fname: "Daniel",
            lname: "Ricciardo",
            number: "3"
        }

    }
]



const search = window.location.search.slice(1).split('&');
console.log(search)
const did = search.find((s) => s.startsWith('did')).split('=')[1];
console.log(search)
const team = data.find((t) => t.teamId === did);
console.log(team)
console.log(document.getElementById('mc'))

document.getElementById("mc").innerHTML = `
<div class="left">
<div class="title">${team.teamName}</div>
<div class="info">
    <table>
        <tr>
            <td colspan="3">
                <img src="${team.teamLogo}" alt="RedBull"
                    class="constructor-logo">
            </td>
        </tr>
        <tr>
            <td class="info-left">Full Team Name</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.fullTeamName}</td>
        </tr>
        <tr>
            <td class="info-left">Base</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.base}</td>
        </tr>
        <tr>
            <td class="info-left">Team Chief</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.teamChief}</td>
        </tr>
        <tr>
            <td class="info-left">Technical Chief</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.techChief}</td>
        </tr>
        <tr>
            <td class="info-left">Chassis</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.chassis}</td>
        </tr>
        <tr>
            <td class="info-left">Power Unit</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.powerUnit}</td>
        </tr>
        <tr>
            <td class="info-left">First Team Entry</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.firstEntry}</td>
        </tr>
        <tr>
            <td class="info-left">World Championships</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.wc}</td>
        </tr>
        <tr>
            <td class="info-left">Highest Race Finish</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.highestFinish}</td>
        </tr>
        <tr>
            <td class="info-left">Pole Positions</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.polePositions}</td>
        </tr>
        <tr>
            <td class="info-left">Fastest Laps</td>
            <td class="info-divider">:</td>
            <td class="info-right">${team.fastestLaps}</td>
    </table>
</div>
</div>
<div class="driver">
<!-- Driver1 -->
<div class="driver1">
    <img src="${team.d1.img}" alt="Max Verstappen">
    <table style="margin-left: 0.5em;">
        <tr>
            <td class="driver-name">
                <p class="driver-fname">${team.d1.fname}</p>
                <p class="driver-lname">${team.d1.lname}</p>
            </td>
            <td class="driver-position">
                ${team.d1.number}
            </td>
        </tr>
    </table>
</div>
<!-- Driver2 -->
<div class="driver2">
    <img src="${team.d2.img}" alt="Max Verstappen" align='center'>
    <table style="margin-left: 0.5em;">
        <tr>
            <td class="driver-name">
                <p class="driver-fname">${team.d2.fname}</p>
                <p class="driver-lname">${team.d2.lname}</p>
            </td>
            <td class="driver-position">
                ${team.d2.number}
            </td>
        </tr>
    </table>
</div>
</div>`