from models.endorsement_model import Endorsement

endorsement_list = [
    # fox & firkin
    Endorsement(
        content = "Yuu Kitchen A great pub & venue, my mates live in Lewisham so I'm always here when I'm in the area. I will place a donation soon, really hope you remain open & some positive change is on the horizon economy needs it & we need it !",
        user_id = 1,
        fund_id = 3
    ),
    Endorsement(
        content = "Jazz Cafe I have frequented this establishment in various guises over the years. One of the best boozers in the SE. Let's make sure we keep them afloat!.",
        user_id = 1,
        fund_id = 2
    ),
    Endorsement(
        content = "Fox and Firkin has been my local 'go-to' for years, there's not another venue or vibe like it. Donated, wish it could be more but I have faith all will keep it going. We need F&F 🖤",
        user_id = 2,
        fund_id = 1
    ),
    Endorsement(
        content = "Test endorsement SkandiHus",
        user_id = 2,
        fund_id = 4
    )
]