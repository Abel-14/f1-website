const data = [
    {
        link: "./drivers-detail.html?did=ver",
        glow: "driver-table-redbull",
        hrColor: "var(--redbull_color);",
        driverNum: "/src/assets/Drivers/No/Max Verstappen.png",
        driverImg: "/src/assets/Drivers/PNG/Max Verstappen.png",
        driverPos: "1",
        driverFname: "MAX",
        driverLname: "VERSTAPPEN",
        driverFlag: "/src/assets/Flags/Netherlands.png",
        teamColor: "var(--redbull_color)",
        teamName: "Red Bull Racing",
        driverPoints: "407 PTS"
    },
    {
        link: "./drivers-detail.html?did=per",
        glow: "driver-table-redbull",
        hrColor: "var(--redbull_color);",
        driverNum: "/src/assets/Drivers/No/Sergio Perez.png",
        driverImg: "/src/assets/Drivers/PNG/Sergio Perez.png",
        driverPos: "2",
        driverFname: "SERGIO",
        driverLname: "PEREZ",
        driverFlag: "/src/assets/Flags/Mexico.png",
        teamColor: "var(--redbull_color)",
        teamName: "Red Bull Racing",
        driverPoints: "223 PTS"
    },
    {
        link: "./drivers-detail.html?did=ham",
        glow: "driver-table-mercedes",
        hrColor: "var(--mercedes_color);",
        driverNum: "/src/assets/Drivers/No/Lewis Hamilton.png",
        driverImg: "/src/assets/Drivers/PNG/Lewis Hamilton.png",
        driverPos: "3",
        driverFname: "LEWIS",
        driverLname: "HAMILTON",
        driverFlag: "/src/assets/Flags/United Kingdom.png",
        teamColor: "var(--mercedes_color)",
        teamName: "Mercedes",
        driverPoints: "194 PTS"
    },
    {
        link: "./drivers-detail.html?did=alo",
        glow: "driver-table-astonmartin",
        hrColor: "var(--astonmartin_color);",
        driverNum: "/src/assets/Drivers/No/Fernando Alonso.png",
        driverImg: "/src/assets/Drivers/PNG/Fernando Alonso.png",
        driverPos: "4",
        driverFname: "FERNANDO",
        driverLname: "ALONSO",
        driverFlag: "/src/assets/Flags/Spain.png",
        teamColor: "var(--astonmartin_color)",
        teamName: "Aston Martin",
        driverPoints: "175 PTS"
    },
    {
        link: "./drivers-detail.html?did=sai",
        glow: "driver-table-ferrari",
        hrColor: "var(--ferrari_color);",
        driverNum: "/src/assets/Drivers/No/Carlos Sainz.png",
        driverImg: "/src/assets/Drivers/PNG/Carlos Sainz.png",
        driverPos: "5",
        driverFname: "CARLOS",
        driverLname: "SAINZ",
        driverFlag: "/src/assets/Flags/Spain.png",
        teamColor: "var(--ferrari_color)",
        teamName: "Ferrari",
        driverPoints: "153 PTS"
    },
    {
        link: "./drivers-detail.html?did=lec",
        glow: "driver-table-ferrari",
        hrColor: "var(--ferrari_color);",
        driverNum: "/src/assets/Drivers/No/Charles LeClerc.png",
        driverImg: "/src/assets/Drivers/PNG/Charles LeClerc.png",
        driverPos: "6",
        driverFname: "CHARLES",
        driverLname: "LECLERK",
        driverFlag: "/src/assets/Flags/Monaco.png",
        teamColor: "var(--ferrari_color)",
        teamName: "Ferrari",
        driverPoints: "135 PTS"
    },
    {
        link: "./drivers-detail.html?did=nor",
        glow: "driver-table-mclaren",
        hrColor: "var(--mclaren_color);",
        driverNum: "/src/assets/Drivers/No/Lando Norris.png",
        driverImg: "/src/assets/Drivers/PNG/Lando Norris.png",
        driverPos: "7",
        driverFname: "LANDO",
        driverLname: "NORRIS",
        driverFlag: "/src/assets/Flags/United Kingdom.png",
        teamColor: "var(--mclaren_color)",
        teamName: "McLaren",
        driverPoints: "121 PTS"
    },
    {
        link: "./drivers-detail.html?did=rus",
        glow: "driver-table-mercedes",
        hrColor: "var(--mercedes_color);",
        driverNum: "/src/assets/Drivers/No/George Russell.png",
        driverImg: "/src/assets/Drivers/PNG/George Russell.png",
        driverPos: "8",
        driverFname: "GEORGE",
        driverLname: "RUSSELL",
        driverFlag: "/src/assets/Flags/United Kingdom.png",
        teamColor: "var(--mercedes_color)",
        teamName: "Mercedes",
        driverPoints: "120 PTS"
    },
    {
        link: "./drivers-detail.html?did=str",
        glow: "driver-table-astonmartin",
        hrColor: "var(--astonmartin_color);",
        driverNum: "/src/assets/Drivers/No/Lance Stroll.png",
        driverImg: "/src/assets/Drivers/PNG/Lance Stroll.png",
        driverPos: "10",
        driverFname: "LANCE",
        driverLname: "STROLL",
        driverFlag: "/src/assets/Flags/Canada.png",
        teamColor: "var(--astonmartin_color)",
        teamName: "Aston Martin",
        driverPoints: "47 PTS"
    },
    {
        link: "./drivers-detail.html?did=gas",
        glow: "driver-table-alpine",
        hrColor: "var(--alpine_color);",
        driverNum: "/src/assets/Drivers/No/Pierre Gasly.png",
        driverImg: "/src/assets/Drivers/PNG/Pierre Gasly.png",
        driverPos: "11",
        driverFname: "PIERRE",
        driverLname: "GASLY",
        driverFlag: "/src/assets/Flags/France.png",
        teamColor: "var(--alpine_color)",
        teamName: "Alpine",
        driverPoints: "46 PTS"
    },
    {
        link: "./drivers-detail.html?did=oco",
        glow: "driver-table-alpine",
        hrColor: "var(--alpine_color);",
        driverNum: "/src/assets/Drivers/No/Esteban Ocon.png",
        driverImg: "/src/assets/Drivers/PNG/Esteban Ocon.png",
        driverPos: "12",
        driverFname: "ESTEBAN",
        driverLname: "OCON",
        driverFlag: "/src/assets/Flags/France.png",
        teamColor: "var(--alpine_color)",
        teamName: "Alpine",
        driverPoints: "38 PTS"
    },
    {
        link: "./drivers-detail.html?did=alb",
        glow: "driver-table-williams",
        hrColor: "var(--williams_color);",
        driverNum: "/src/assets/Drivers/No/Alexander Albon.png",
        driverImg: "/src/assets/Drivers/PNG/Alexander Albon.png",
        driverPos: "13",
        driverFname: "ALEXANDER",
        driverLname: "ALBON",
        driverFlag: "/src/assets/Flags/Thailand.png",
        teamColor: "var(--williams_color)",
        teamName: "Williams",
        driverPoints: "23 PTS"
    },
    {
        link: "./drivers-detail.html?did=hul",
        glow: "driver-table-haas",
        hrColor: "var(--haas_color);",
        driverNum: "/src/assets/Drivers/No/Nico Hulkenberg.png",
        driverImg: "/src/assets/Drivers/PNG/Nico Hulkenberg.png",
        driverPos: "14",
        driverFname: "NICO",
        driverLname: "HULKENBERG",
        driverFlag: "/src/assets/Flags/Germany.png",
        teamColor: "var(--hass_color)",
        teamName: "Haas F1 Team",
        driverPoints: "9 PTS"
    },
    {
        link: "./drivers-detail.html?did=bot",
        glow: "driver-table-alfaromeo",
        hrColor: "var(--alfaromeo_color);",
        driverNum: "/src/assets/Drivers/No/Valtteri Bottas.png",
        driverImg: "/src/assets/Drivers/PNG/Valtteri Bottas.png",
        driverPos: "15",
        driverFname: "VALTTERI",
        driverLname: "BOTTAS",
        driverFlag: "/src/assets/Flags/Finland.png",
        teamColor: "var(--alfaromeo_color)",
        teamName: "Alfa Romeo",
        driverPoints: "6 PTS"
    },
    {
        link: "./drivers-detail.html?did=gua",
        glow: "driver-table-alfaromeo",
        hrColor: "var(--alfaromeo_color);",
        driverNum: "/src/assets/Drivers/No/Zhou Guanyu.png",
        driverImg: "/src/assets/Drivers/PNG/Zhou Guanyu.png",
        driverPos: "16",
        driverFname: "ZHOU",
        driverLname: "GUANYU",
        driverFlag: "/src/assets/Flags/China.png",
        teamColor: "var(--alfaromeo_color)",
        teamName: "Alfa Romeo",
        driverPoints: "4 PTS"
    },
    {
        link: "./drivers-detail.html?did=tsu",
        glow: "driver-table-alphatauri",
        hrColor: "var(--alphatauri_color);",
        driverNum: "/src/assets/Drivers/No/Yuki Tsunoda.png",
        driverImg: "/src/assets/Drivers/PNG/Yuki Tsunoda.png",
        driverPos: "17",
        driverFname: "YUKI",
        driverLname: "TSUNODA",
        driverFlag: "/src/assets/Flags/Japan.png",
        teamColor: "var(--alphatauri_color)",
        teamName: "Alpha Tauri",
        driverPoints: "3 PTS"
    },
    {
        link: "./drivers-detail.html?did=mag",
        glow: "driver-table-haas",
        hrColor: "var(--haas_color);",
        driverNum: "/src/assets/Drivers/No/Kevin Magnussen.png",
        driverImg: "/src/assets/Drivers/PNG/Kevin Magnussen.png",
        driverPos: "18",
        driverFname: "KEVIN",
        driverLname: "MAGNUSSEN",
        driverFlag: "/src/assets/Flags/Denmark.png",
        teamColor: "var(--haas_color)",
        teamName: "Haas F1 Team",
        driverPoints: "3 PTS"
    },
    {
        link: "./drivers-detail.html?did=law",
        glow: "driver-table-alphatauri",
        hrColor: "var(--alphatauri_color);",
        driverNum: "/src/assets/Drivers/No/Liam Lawson.png",
        driverImg: "/src/assets/Drivers/PNG/Liam Lawson.png",
        driverPos: "19",
        driverFname: "LIAM",
        driverLname: "LAWSON",
        driverFlag: "/src/assets/Flags/New Zealand.png",
        teamColor: "var(--alphatauri_color)",
        teamName: "Alpha Tauri",
        driverPoints: "2 PTS"
    },
    {
        link: "./drivers-detail.html?did=sar",
        glow: "driver-table-williams",
        hrColor: "var(--williams_color)",
        driverNum: "/src/assets/Drivers/No/Logan Sargeant.png",
        driverImg: "/src/assets/Drivers/PNG/Logan Sargeant.png",
        driverPos: "20",
        driverFname: "LOGAN",
        driverLname: "SARGEANT",
        driverFlag: "/src/assets/Flags/United States.png",
        teamColor: "var(--williams_color)",
        teamName: "Williams",
        driverPoints: "0 PTS"
    },
    {
        link: "./drivers-detail.html?did=dev",
        glow: "driver-table-alphatauri",
        hrColor: "var(--alphatauri_color)",
        driverNum: "/src/assets/Drivers/No/Nyck De Vries.png",
        driverImg: "/src/assets/Drivers/PNG/Nyck De Vries.png",
        driverPos: "21",
        driverFname: "NYCK",
        driverLname: "DE VRIES",
        driverFlag: "/src/assets/Flags/Netherlands.png",
        teamColor: "var(--alphatauri_color)",
        teamName: "Alpha Tauri",
        driverPoints: "0 PTS"
    },
    {
        link: "./drivers-detail.html?did=ric",
        glow: "driver-table-alphatauri",
        hrColor: "var(--alphatauri_color)",
        driverNum: "/src/assets/Drivers/No/Daniel Ricciardo.png",
        driverImg: "/src/assets/Drivers/PNG/Daniel Ricciardo.png",
        driverPos: "22",
        driverFname: "DANIEL",
        driverLname: "RICCIARDO",
        driverFlag: "/src/assets/Flags/Australia.png",
        teamColor: "var(--alphatauri_color)",
        teamName: "Alpha Tauri",
        driverPoints: "0 PTS"
    },
]

document.getElementById("driver").innerHTML = data
    .map(
        (item) => `
    <a href="${item.link}">
          <table class="${item.glow} driver-table">
            <tr>
              <td class="driver-left">
                <img src="${item.driverNum}" alt="1" class="driver-left-num" />
                <img src="${item.driverImg}" alt="Max Verstappen" class="driver-left-img" />
                <p class="driver-left-position">${item.driverPos}</p>
              </td>
              <td class="driver-right" align="center" width="100%">
                <table>
                  <tr>
                    <td class="driver-fname">${item.driverFname}</td>
                    <td class="driver-flag">
                      <img src="${item.driverFlag}" alt="Netherlands Flag" />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="driver-lname">${item.driverLname}</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding: 0">
                      <hr style="border: max(1px, 0.125em) solid ${item.hrColor};" />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="team-name">${item.teamName}</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="driver-points">${item.driverPoints}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </a>`
    )
    .join("")