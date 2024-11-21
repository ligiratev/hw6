function getMonthes(season) {
    switch (season) {
        case "winter":
            return ["December", "January", "February"];
        case "spring":
            return ["March", "April", "May"];
        case "summer":
            return ["June", "July", "August"];
        case "autumn":
            return ["September", "October", "November"];
    }
}

function getColorBySeason(season) {
    switch (season) {
        case "winter":
            return "#207db5";
        case "spring":
            return "#48ff2c";
        case "summer":
            return "#ffd733";
        case "autumn":
            return "#ff9c0d";
    }
}

function getSeasonImagePath(season) {
    return `images/${season}.jpg`;
}

let $seasons = document.querySelectorAll(".seasons button");
let $monthes = document.querySelector(".monthes");
for (const $season of $seasons) {
    $season.addEventListener("click", () => {
        $monthes.innerHTML = "";
        let season = $season.innerText.toLowerCase();
        let monthes = getMonthes(season);
        for (const month of monthes) {
            let $month = document.createElement("button");
            $month.innerText = month;
            $month.style.backgroundColor = getColorBySeason(season);
            $monthes.append($month);
            document.body.style.backgroundImage = `url('${getSeasonImagePath(
                season
            )}')`;
        }
    });
}
