import "./BasicTip.css";

export const BasicTipCard = () => {

    return (
        <>
        
            <div className="intro">
                <h1>The Beginners' Guide To Working Out</h1>
                <h3>Now before anyone goes to the gym, there are quite a few things to keep in mind as general knowedge for working out. Some of these things will be easy to get down or remember, and others will take some practice but will be easy after a little bit.</h3>
            </div>
            <div className="basic_tip_card">
                <div className="basic_tip_content">
                    <br>
                    </br>
                    <div className="info">
                        <h2>The Warm Up</h2>
                        <h3>Warming up is one of the most important aspect to any workout especially higher intensity workouts.</h3>
                        <ul>
                            <li>Warming up by stretching is an option... No, not the static stretching you're thinking of, rather something called active stretching.<a className="clickhere" href="https://www.wise-geek.com/what-is-active-stretching.htm"> See Definition Here</a></li>
                            <li>Warming up by performing some exercises with light weight at the specific muscles you'll be working out is also a strongly encouraged workout warm up. </li>
                            <li>Warming up through light cardio is, as well, a great way to get your blood pumping and reduce risk of injury once the real workout begins, all it takes is 5 to 10 minutes of jogging, jump roping, etc and then you are ready.</li>
                        </ul>
                    </div>
                    <br>
                    </br>
                    <div className="info">
                        <h2>The Workout</h2>
                        <h3>During the workout there are a few general practices for every exercise beginners should know to have a full and effective workout.</h3>
                        <ul>
                            <li>Breathing in through your nose when releasing weight and then out through your mouth when going against weight is important to give you effective oxygen flow during the exercise.</li>
                            <li>When aiming for muscle growth, the general practice is eat more and lift heavy with fewer reps. This will prompt the muscle to repair itself stronger than before. Usually the number is 6-10 reps.</li>
                            <li>When aiming for fat loss, high amounts of cardio can help ,but with weight training the general practice is lighter weight with more reps. Usually the number is 15-20 reps.</li>
                            <li>Rest is as important with your fitness as the proper diet is, taking resting periods of a minute or so inbetween each set gives your body a chance to recover and perform the same exercise with similar intensity unlike going through all sets without a break.</li>
                        </ul>
                    </div>
                    <br>
                    </br>
                    <div className="info">
                        <h2>The Cool Down</h2>
                        <h3>After your workout has been completed it's time for a little cool down which will help soreness, mobility, and overall health.</h3>
                        <ul>
                            <li>Stretch! Stretch! Stretch! Stretching helps break up the lactic acid which is what causes muscle soreness and prompts your muscles to repair faster. It also lowers risk of injury and prompts mobility to be heightened.</li>
                            <li>Protein consumption in general is important, especially for those who are trying to gain muscle and mass, so the short 30 minute to hour long window right after your workout is very important. During this Anabolic Window your body is trying to repair itself rapidly and breaking down proteins you've digested to do it. So protein shakes and high protein foods are especially utilized during this period.</li>
                            <li>Getting plenty of sleep is essential for muscle repairment. Your body uses the time that you are asleep to repair your muscles, so get a good 8 hours of sleep and take rest days to further prompt your muscles' repairment to be faster.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    )
}