const dashboardFollowCards = document.querySelector(".dashboardFollowCards");
const dashboardOverviewCards = document.querySelector(".dashboardOverviewCards");
const data = {
    follow: [
        {
            img: "facebook",
            link: "@nathanf",
            count: {
                total: 1987,
                today: 12,
            },
            positive: true,
        },
        {
            img: "twitter",
            link: "@nathanf",
            count: {
                total: 1044,
                today: 99,
            },
            positive: true,
        },
        {
            img: "instagram",
            link: "@nathanf",
            count: {
                total: "11k",
                today: 1009,
            },
            positive: true,
        },
        {
            img: "youtube",
            link: "Nathan F.",
            count: {
                total: 8239,
                today: 144,
            },
            positive: false,
        },
    ],
    overview: [
        {
            name: "Page View",
            img: "facebook",
            count: {
                total: 87,
                today: 3,
            },
            positive: true,
        },
        {
            name: "Likes",
            img: "facebook",
            count: {
                total: 52,
                today: 2,
            },
            positive: false,
        },
        {
            name: "Likes",
            img: "instagram",
            count: {
                total: 5462,
                today: 2257,
            },
            positive: true,
        },
        {
            name: "Profile Views",
            img: "instagram",
            count: {
                total: "52k",
                today: 1375,
            },
            positive: true,
        },
        {
            name: "Retweets",
            img: "twitter",
            count: {
                total: 117,
                today: 303,
            },
            positive: true,
        },
        {
            name: "Likes",
            img: "twitter",
            count: {
                total: 507,
                today: 553,
            },
            positive: true,
        },
        {
            name: "Likes",
            img: "youtube",
            count: {
                total: 107,
                today: 19,
            },
            positive: false,
        },
        {
            name: "Total Views",
            img: "youtube",
            count: {
                total: 1407,
                today: 12,
            },
            positive: false,
        },
    ],
};

// Follow
dashboardFollowCards.innerHTML = data.follow
    .map(
        (item) => `
            <article class="dashboardFollowCard dashboardFollowFacebook">
                <a href="/"><img src="./images/icon-${item.img}.svg" alt="" />@nathanf</a>
                <h1>${item.count.total}</h1>
                <h3>FOLLOWERS</h3>
                <h6 class="${item.positive ? " " : "down"}">
                    <img src="./images/icon-${item.positive ? "up" : "down"}.svg" alt="" />
                    ${item.count.today} Today
                </h6>
            </article>
        `
    )
    .join("");

// Overview
dashboardOverviewCards.innerHTML = data.overview
    .map(
        (item) => `
            <article class="dashboardOverviewCard">
                <div class="dashboardOverviewCardHead">
                    <h3>${item.name}</h3>
                    <a href="/"><img src="./images/icon-${item.img}.svg" alt="" /></a>
                </div>

                <div class="dashboardOverviewCardFoot">
                    <h1>${item.count.total}</h1>
                    <h6 class="${item.positive ? " " : "down"}">
                        <img src="./images/icon-${item.positive ? "up" : "down"}.svg" alt="" />
                        ${item.count.today}%
                    </h6>
                </div>
            </article>
        `
    )
    .join("");
