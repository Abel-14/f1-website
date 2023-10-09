const data = [
    {
        link: "./constructors-detail.html?did=redbull",
        teamId: "redBull",
        teamPos: "1",
        teamName: "RED BULL RACING",
        teamLogo: "../assets/Constructors/Logo/redBull_logo.png",
        teamCar: "../assets/Constructors/Cars/redBull_Car.png",
        points: "623 PTS",
        p1: {
            fname: "Max",
            lname: "Verstappen",
            img: "../assets/Drivers/PNG/Max Verstappen.png",
        },
        p2: {
            fname: "Sergio",
            lname: "Perez",
            img: "../assets/Drivers/PNG/Sergio Perez.png",
        },

    },

    {
        link: "./constructors-detail.html?did=mercedes",
        teamId: "mercedes",
        teamPos: "2",
        teamName: "MERCEDES",
        teamLogo: "../assets/Constructors/Logo/mercedes_logo.png",
        teamCar: "../assets/Constructors/Cars/mercedes_Car.png",
        points: "305 PTS",
        p1: {
            fname: "Lewis",
            lname: "Hamilton",
            img: "../assets/Drivers/PNG/Lewis Hamilton.png",
        },
        p2: {
            fname: "George",
            lname: "Russel",
            img: "../assets/Drivers/PNG/Valtteri Bottas.png",
        },

    },
    {
        link: "./constructors-detail.html?did=ferrari",
        teamId: "ferrari",
        teamPos: "3",
        teamName: "FERRARI",
        teamLogo: "../assets/Constructors/Logo/ferrari_logo.png",
        teamCar: "../assets/Constructors/Cars/ferrari_car.png",
        points: "288 PTS",
        p1: {
            fname: "Carlos",
            lname: "Sainz",
            img: "../assets/Drivers/PNG/Carlos Sainz.png",
        },
        p2: {
            fname: "Charles",
            lname: "Leclerc",
            img: "../assets/Drivers/PNG/Charles Leclerc.png",
        },
    },
    {
        link: "./constructors-detail.html?did=astonmartin",
        teamId: "astonMartin",
        teamPos: "4",
        teamName: "ASTON MARTIN",
        teamLogo: "../assets/Constructors/Logo/astonMartin_logo.png",
        teamCar: "../assets/Constructors/Cars/astonMartin_Car.png",
        points: "222 PTS",
        p1: {
            fname: "Fernando",
            lname: "Alonso",
            img: "../assets/Drivers/PNG/Fernando Alonso.png",
        },
        p2: {
            fname: "Lance",
            lname: "Stroll",
            img: "../assets/Drivers/PNG/Lance Stroll.png",
        },
    },
    {
        link: "./constructors-detail.html?did=mclaren",
        teamId: "mcLaren",
        teamPos: "5",
        teamName: "MCLAREN",
        teamLogo: "../assets/Constructors/Logo/mcLaren_logo.png",
        teamCar: "../assets/Constructors/Cars/mcLaren_Car.png",
        points: "222 PTS",
        p1: {
            fname: "Oscar",
            lname: "Piastri",
            img: "../assets/Drivers/PNG/Oscar Piastri.png",
        },
        p2: {
            fname: "Lando",
            lname: "Norris",
            img: "../assets/Drivers/PNG/Lando Norris.png",
        },
    },
    {
        link: "./constructors-detail.html?did=alpine",
        teamId: "alpine",
        teamPos: "6",
        teamName: "ALPINE",
        teamLogo: "../assets/Constructors/Logo/alpine_logo.png",
        teamCar: "../assets/Constructors/Cars/alpine_Car.png",
        points: "222 PTS",
        p1: {
            fname: "Pierre",
            lname: "Gasly",
            img: "../assets/Drivers/PNG/Pierre Gasly.png",
        },
        p2: {
            fname: "Esteban",
            lname: "Ocon",
            img: "../assets/Drivers/PNG/Esteban Ocon.png",
        },
    },
    {
        link: "./constructors-detail.html?did=williams",
        teamId: "williams",
        teamPos: "7",
        teamName: "WILLIAMS",
        teamLogo: "../assets/Constructors/Logo/williams_logo.png",
        teamCar: "../assets/Constructors/Cars/williams_Car.png",
        points: "23 PTS",
        p1: {
            fname: "Alexander",
            lname: "Albon",
            img: "../assets/Drivers/PNG/Alexander Albon.png",
        },
        p2: {
            fname: "Logan",
            lname: "Sargeant",
            img: "../assets/Drivers/PNG/Logan Sargeant.png",

        }
    },
    {
        link: "./constructors-detail.html?did=haas",
        teamId: "haas",
        teamPos: "8",
        teamName: "HAAS F1 TEAM",
        teamLogo: "../assets/Constructors/Logo/haas_logo.png",
        teamCar: "../assets/Constructors/Cars/haas_car.png",
        points: "12 PTS",
        p1: {
            fname: "Nico",
            lname: "Hulkenberg",
            img: "../assets/Drivers/PNG/Nico Hulkenberg.png",
        },
        p2: {
            fname: "Kevin",
            lname: "Magnusssen",
            img: "../assets/Drivers/PNG/Kevin Magnussen.png",

        }
    },
    {
        link: "./constructors-detail.html?did=alfaromeo",
        teamId: "alfaRomeo",
        teamPos: "9",
        teamName: "ALFA ROMEO",
        teamLogo: "../assets/Constructors/Logo/alfaRomeo_logo.png",
        teamCar: "../assets/Constructors/Cars/alfaRomeo_car.png",
        points: "10 PTS",
        p1: {
            fname: "Valterri",
            lname: "Bottas",
            img: "../assets/Drivers/PNG/Valtteri Bottas.png",
        },
        p2: {
            fname: "Zhou",
            lname: "Guanyu",
            img: "../assets/Drivers/PNG/Zhou Guanyu.png",

        }
    },
    {
        link: "./constructors-detail.html?did=alphatauri",
        teamId: "alphaTauri",
        teamPos: "10",
        teamName: "ALPHA TAURI",
        teamLogo: "../assets/Constructors/Logo/alphaTauri_logo.png",
        teamCar: "../assets/Constructors/Cars/alphaTauri_car.png",
        points: "10 PTS",
        p1: {
            fname: "Liam",
            lname: "Lawson",
            img: "../assets/Drivers/PNG/Liam Lawson.png",
        },
        p2: {
            fname: "Yuki",
            lname: "Tsunoda",
            img: "../assets/Drivers/PNG/Yuki Tsunoda.png",

        }
    }
];


document.getElementById("constructor").innerHTML = data
    .map(
        (item) => `
    <a href="${item.link}">
        <div class="constructor">
            <div class="constructor-left">
                <table>
                    <tr>
                        <td class="constructor-position">${item.teamPos}</td>
                        <td>
                            <p class="constructor-name">${item.teamName}</p>
                            <p class="constructor-points">${item.points}</p>
                        </td>
                    </tr>
                </table>
    
                <!-- DRIVERS -->
                <table style="margin-top: -2em">
                    <tr>
                        <!-- Driver1 -->
                        <td rowspan="3">
                            <img src="${item.p1.img}" alt="Max Verstappen" class="driver-img" />
                        </td>
                        <td class="driver-name">
                            <p class="driver-fname">${item.p1.fname}</p>
                            <p class="driver-lname">${item.p1.lname}</p>
                        </td>
                        <!-- Divider -->
                        <td rowspan="2" class="divider"></td>
                        <!-- Driver2 -->
                        <td rowspan="3">
                            <img src="${item.p2.img}" alt="Sergio Perez" class="driver-img" />
                        </td>
                        <td class="driver-name">
                            <p class="driver-fname">${item.p2.fname}</p>
                            <p class="driver-lname">${item.p2.lname}</p>
                        </td>
                    </tr>
                </table>
            </div>
    
            <div class="constructor-right">
                <div style="height: 10em; overflow: hidden; display: flex">
                    <img src="${item.teamLogo}" />
                </div>
                <img src="${item.teamCar}" width="500em" />
            </div>
        </div>
    </a>
    `
    )
    .join("");