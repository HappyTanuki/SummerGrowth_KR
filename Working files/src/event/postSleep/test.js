setup.events.push({
    name: 'PostSleepMuscleDialog1',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepMuscleDialog1
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'God, waking up was hard. Your limbs feel stiff, everything hurts, and your body needs some time to warm up and get going. As you go to the bathroom and look in the mirror, something looks... off. You can\'t quite place it, but you think you look a bit thinner? No, that\'s not it. There isn\'t any mass missing. It\'s something else, but you can\'t quite figure it out. As you leave to get on with your day, you miss the view of your back in the mirror, new definition and muscles standing out much more.'
}, {
    name: 'PostSleepBreastsDialog1',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepBreastsDialog1
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: '<<if $outfit.bra()>>As you wake up and put on your <<print $outfit.bra().name>> it feels… different. <</if>>You can’t put your finger on it, but for some reason your clothes just won’t fit properly around your breasts. It takes some fiddling. You chalk to your tiredness and your mind slowly shifting gears before it dawns on you. <br><br>Your breasts feel… different. Immediately, you start palpating them, seeking any odd shapes or weird lumps, but no, your breasts just felt different. It’s still a huge source of anxiety; people’s breasts don’t just change overnight, but here we are! Perhaps some hormonal issue? That unusual drink in your fridge? Aliens? It could be anything, but all you know now is that your breasts feel different and that’s not a good thing… you think? So you just get dressed and ready to start your day, though you’re sure this will just keep bothering you throughout the day.'
}, {
    name: 'PostSleepHeightDialog1',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepHeightDialog1
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'You wake up to an odd sensation coming from your legs. You have never felt it before but they seem to have a slight... aching joint pain? You give them a quick rub before getting out of bed. As you stand, you feel a quick episode of dizziness before making your way to the mirror. For some reason, everything seems a little off. Is everything a bit smaller? No, it couldn\'t be. You couldn\'t have grown overnight, you were done with puberty a long time ago. Deciding to ignore these oddities, you get on with your day.'
}, {
    name: 'PostSleepDickDialog1',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepDickDialog1
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'The day started quite normal. You got up and stretched briefly. After a big yawn, scratching your ass, rubbing your groin… wait, you feel something bulge there. Immediately, your brain jolts awake, realizing something is OFF. Intuitively, your hands snap back there, feeling it while cold sweat mounts on your forehead. Yup, still there, squished in your tight underwear. Very slowly, your neck cranes down as you pull the band forward, dread filling you. There it is, where nothing should be. A penis. You poke it a few times, making sure it’s real. The prodding makes you shiver as you realize it’s VERY real, though incredibly surreal. <br><br>You got a penis. You just stand there for the next five minutes, trying to come to terms with it. You got a penis. You’re not supposed to have one, and it CERTAINLY wasn’t there yesterday. You can only ascribe this to that weird concoction, like everything else that has been happening lately. You make your way to the shower in a daze, unable to process these changes. Drying yourself off, you graze it again with the towel, still not used to it. It felt... well, like just another part of you. No pain, just odd? Whatever this means, it’s now who you are.<<if $outfit.bottom() != null>> Putting on your clothes on, you tuck it in, adding some extra stuffing inside your <<print $outfit.bottom().name>>.<</if>>'
}, {
    name: 'PostSleepBallsDialog1',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepBallsDialog1
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepLipsDialog1',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepLipsDialog1
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepTongueDialog1',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepTongueDialog1
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepMuscleDialog2',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepMuscleDialog2
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'As you wake up, you experience an odd sensation. Once more, you are sore all over, and all your joints feel stiff. In front of the mirror, you try to crack your neck, moving your shoulders a bit to release it whatever is so tight. But that\'s when you notice it in the mirror: your shoulders were more pronounced than you remembered. You continued rotating your arms a bit, seeing the muscles dance beneath your skin. This is... odd. You don\'t recall ever seeing this, and with wide eyes you check it out, shrugging and getting surprised with the rounded mounds, clearly separating your shoulders from your neck and arm. Yet, even in your tired state, there is no denying it. You gained some muscle. You\'ve been moving more lately, but surely the results should appear... slower, right? Still, it\'s nice and doesn\'t look that bad, does it? <<if $carefreeCarefull > 0>><<else>>Perhaps you should look into this... for sure it has to do with that odd drink you found here, but what other effects could it have?<</if>>'
}, {
    name: 'PostSleepBreastsDialog2',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepBreastsDialog2
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Another morning has come, and this time you wake up with a single thought in your head: any new weird changes? Anxiously, you jump out of bed and dash to the mirror. Once there, you begin inspecting your body. <<if $carefreeCarefull < 0>>Or, at least, as carefully as you can manage in your eagerness.<<else>><</if>> The rest of your body seems fine but... yeah. Your breasts DEFINITELY seem and feel... different. They feel fuller, and just... plain bigger. <<if $carefreeCarefull < 0>>It feels... really nice, actually. Some nice weight, a bit of heft, and they fill out nicely. Sure, they suddenly got bigger but this isn\'t that bad, right? Heh, plenty of girls would be jealous! <<if $submissiveDominant > 0>>Maybe you should show them off a bit!<</if>><<else>>And while bigger is nice, you can\'t help but worry about where this all is going. All kinds of things could be wrong, but for now, you\'ll just have to wait and see.<</if>>'
}, {
    name: 'PostSleepHeightDialog2',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepHeightDialog2
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Ouch! Once again, you awaken to a pain coming from your knees. You\'ve heard of growing pains, but that couldn\'t be the case here... could it? Getting up, you are also, once again, greeted by a that slightly dizzying vertigo. What is going on? This time you are sure that your perspective of the room is different. You really are getting taller, noticeably so. How could that even happen? At your age, you shouldn\'t be growing like this. MAYBE another <<if $measurementSystem == "metric">>centimeter<<else>>half-inch<</if>>over the next couple years, but this seems much too fast. Out of morbid curiosity, you decide to check your height. Let\'s see… <<heighNumeral>>  Mmmhmm, definitely taller. <<if $carefreeCarefull < 0>> Well, this is fun. I wonder how tall I\'ll get? <<elseif $shyConfident > 0>> Pretty cool.<</if>>'
}, {
    name: 'PostSleepDickDialog2',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepDickDialog2
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'It’s weird, having a penis. It’s surprisingly present, even though you’re not always aware of it, it is somehow always grazing something or affecting how your clothing feels. It’s this bizarre constant, but you assume eventually you will get over the fact that, you know, you got a DICK, it’s not that bad. Surprising, maybe a bit odd, sure. But at the end of the day, it’s just a new (and unexpected) addition to your body. Your morning routine didn’t change, your days didn’t change… you’re just a girl with a dick now. Yet, despite getting more used to it, you still have to try not to dwell on it, and just trying to ignore it for now as you start your day. '
}, {
    name: 'PostSleepBallsDialog2',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepBallsDialog2
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepLipsDialog2',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleeplipsDialog2
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepTongueDialog2',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepTongueDialog2
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepMuscleDialog3',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepMuscleDialog3
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Another day of waking up sore all over. You almost got used to with the feeling now, but it is worrying how often you feel like this. And what is even more worrying are the gains you are making. You are getting a lot more active, that is true. Eating differently, a new routine, sure. But changes THIS drastic? You\'re quite sure muscles growing this fast are unheard of! But... as you rub your biceps a bit and flex it... it does look and feel rather nice, doesn\'t it...? <<if $shyConfident > 0>>As you touch it, you smile. It DOES feel better; way better. Strong, powerful... you feel an urge for more of it. Perhaps it’s time to hit the gym a bit harder!<</if>> <<if $carefreeCarefull > 0>>You don\'t even care how you\'re growing so fast; best to just enjoy the ride, right?<<else>>It does worry you, how much you\'re growing. Time to focus on learning what you can regarding those weird concoctions!<</if>>'
}, {
    name: 'PostSleepBreastsDialog3',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepBreastsDialog3
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Sleeping on your chest is never easy, especially with your enlarged mammaries. Your sleep keeps getting interrupted as you try to get comfortable around the new meat pillows, and as you get up, you grunt a bit. Okay, bigger tits. Nice. Whatever. Good sleep? More important! At this rate, you\'ll either need to adjust your sleeping position, or get a better coffee machine. Getting up, you grunt a bit, shifting as your shifted center of gravity throws you off balance. Immediately, it became clear your breasts have grown. Again. This might become worrying at some point, but for now, you have bigger fish to fry.'
}, {
    name: 'PostSleepHeightDialog3',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepHeightDialog3
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Ugh, another day waking up to growing pains. There is no doubt about it, these are growing pains resulting from your increasing height. It is kind of fun having this new perspective on everything, though. You can see on top of certain things, and a surprising amount of stuff is suddenly within reach.<<if $carefreeCarefull > 0>> Still, it would be nice if there it didn’t come with so much discomfort, or the looming specter of potential health risks.<</if>>  Going over to your mirror, you take a moment to appreciate your longer frame, particularly your legs.<<if $shyConfident > 0>> Mmm... a girl could get used to waking up with longer, sexier legs.<</if>><<if $submissiveDominant > 0>> They’d look good wrapped around someone, squeezing them a bit.<</if>>'
}, {
    name: 'PostSleepDickDialog3',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepDickDialog3
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'As you wake up, something catches your attention. After twisting and turning, you just can’t find comfort. It’s only when you sit up in your bed that you figure out why. <br><br>Your dick is hard. It stands out, fully erect, a good <<numeralConversion setup.getTempDick()>> long. Stunned, you look at it while it stands proud, its veins impossible to ignore. Your own breath washes over it, and you shudder as it touches its sensitive tip. This is the first time waking up like this, and you’re not sure what to do. Until now, you managed to ignore it. But this simply demands attention. <<if $shyConfident < 0>> You can’t deal with this. Not now, not yet, not here. You grab your outfit and force them over your rod, yet you shake with a shiver and a moan when as your hand pushes it in your underwear. <<else>> You work up some courage and run a single finger, from the underside to the tip of your penis. Immediately, you find yourself moaning and gasping. Your back arches, your body shudders. For the first time, shoot your load, and find unexpected clarity in its wake. <</if>> '
}, {
    name: 'PostSleepBallsDialog3',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepBallsDialog3
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepLipsDialog3',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepLipsDialog3
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepTongueDialog3',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepTongueDialog3
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepMuscleDialog4',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepMuscleDialog4
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Yet again, you wake up bigger. You aren\'t immediately sure, but as you get out of bed, you feel your sore limbs and muscles leaving a clear message. Looking in the bathroom mirror… yup. All the telltale signs are there once more. <<if $shyConfident > 0>>Heh, great. Bigger is better, right? Time to hit the gym, get some REAL gains in! It\'s amazing how easily you have adapted to the idea of growing so fast. Perhaps it just suits you.<</if>> <<if $carefreeCarefull < 0>>You don\'t even care how or why you\'re growing so fast. You are just decided to enjoy it fully.<<else>>It does worry you, all this growth. You feel an urge to focus on finding out more about that mysterious potion!<</if>>'
}, {
    name: 'PostSleepHeightDialog4',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepHeightDialog4
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Waking up to the now familiar sensation of limb-lengthening pain coming from your knees, you start going through the motions of what has become something of a routine. First, you reach down and rub the aching joints, taking a little time to caress the extra length now gracing your gams. Next, you get up out of bed, being careful to steady yourself during the inevitable moment of dizziness. Then you do a few stretches to get the blood flowing through your entire length. This increased stature feels more and more worth the pains that greet you on so many mornings. You can reach higher. You don’t get lost in crowds, your figure looks nicer. Looking at your reflection in the mirror… this isn’t so bad after all.'
}, {
    name: 'PostSleepDickDialog4',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepDickDialog4
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Waking up you feel the proverbial morning wood again. Urgh. What was once shocking is now something you’re used to, just another thing to start your day. As you make your way to the kitchen to grab some food, <<if $outfit.underwear() || $outfit.bottom()>>you readjust your junk through your <<print $outfit.underwear()?.name || $outfit.bottom()?.name>>, <</if>>but the moment your hand touches the head… you buckle forward, grabbing the food you just got from the fridge. That felt GOOD, incredibly good. Your entire body felt the electric jolt going through it while your muscles tense up, and you bite your lips. You realize you had stopped breathing for a bit, and take another shuddering breath. Even that felt… better. Sharper. Wilder. Your hand touches it again, groping it. Another electric jolt. Your toes curl, sweat slowly forming on your forehead. What a feeling! Your dick hardens more somehow, standing proudly erect, as your entire body now lives for one thing; getting off. Your arm starts just… groping and feeling it, trying to milk more pleasure out of it. The arousal builds in your body as you get lightheaded, and it flows into the rest of your body. You forget the rest of the world, even as your hands become slippery, moving faster and faster around your increasingly lubricated dick. Finally, the climax comes, and your legs give out under you. Leaning against a counter, frantically panting with cum-stained hands, you brain tries to recover from the sheer amount of pleasure you somehow unearthed. What a way to start your day!'
}, {
    name: 'PostSleepBallsDialog4',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepBallsDialog4
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepLipsDialog4',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepLipsDialog4
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepTongueDialog4',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepTongueDialog4
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepBreastsDialog4',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepBreastsDialog4
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Taking a shower is an interesting experience with your more voluminous breasts. It only takes you a few seconds to notice that they had grown again; after all, it’s not difficult to perceive the shift in weight, or the added mass on your chest. Even with all the other changes happening, this one always stands out. Your hand caresses each as water drips from your body, the smooth skin gently kneaded by your hand. Showers are moments of introspection, and with your changing body it’s a given. As you feel them, you try to reconcile the last few days, trying to give it make sense of it all. This is your body. It has grown. It’s different, but still 100% you. Bigger breasts, different build... Whether you want it to or not, you keep changing. You remain in the shower, taking way longer than usual, but it helps acclimating to your enhanced body. At least until the next set of changes.'
}, {
    name: 'PostSleepMuscleDialog5',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepMuscleDialog5
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Soreness, the telltale sign of growth. As you get out of bed, you stand up and stretch a bit, letting your growing muscles get some blood in them. It\'s odd, everything considered. You got used to growing, despite the consistent changes. New clothing, eating more... It has all become routine by now. Some days you wonder whether you should get angry or scared, but what good would that do? You splash some water on your face, and reflect on the changes. You\'re growing. Your body is changing. A lot of people go through that, but you are off the curve because of the pace and amount of changes. Leaning against the side of the sink, you feel the strength in your hands as your triceps erupt unexpectedly.<br><br>You\'re changing. You used to wonder how much you’d change, and when it might stop... but now you just wonder if you WANT it to stop.'
}, {
    name: 'PostSleepBreastsDialog5',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepBreastsDialog5
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Another time waking up, another odd feeling in your chest. Slightly warm, heavier, fuller... yup, there it is. They\'ve grown again. Still waking up, you get up from your bed, just feeling them hang down for a moment. It has almost become routine for you by now: bigger breasts, buying new bras, maybe a new top... They push out further, and it does look AMAZING on your frame. But hey, that\'s a given already. That\'s your new reality: the girl with the growing tits.'
}, {
    name: 'PostSleepHeightDialog5',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepHeightDialog5
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Today you wake up with no growing pains, no dizziness, but you definitely grew taller overnight. Standing up from the bed, you stretch and then smile as you take in your new, higher, perspective.  <<if $carefreeCarefull < 0>>Skipping <<else>> Walking<</if>> over to the mirror you admire your new height. <<if $shyConfident > 0>>You even strike some sexy poses, standing on your tiptoes to really accentuate your stretched figure. <</if>> Taking out a tape measure, you quickly find your height to now be <<heightNumeral>>. Hopefully this growth doesn\'t stop any time soon, as you amaze yourself with how great you look now and how easy it has gotten to reach things on shelves that used to be daunting.'
}, {
    name: 'PostSleepDickDialog5',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepDickDialog5
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Another night of restless sleep, another morning waking up rock hard. Your dick has grown again, standing tall and proud as you get up. Heh. And to think that it once scared you; now, it has pretty much become part of your morning routine, greeting you in full attention. Casually, you walk through your house with your private tent, going about your business. It’s sensitive, throbbing at any stimulus. Sometimes you wonder if guys have to deal with this all the time. If so, you never heard about it. Still, it’s nice, eating breakfast with that thing just bobbing between your legs. You might even rub one out, yet another new constant in your morning routine.'
}, {
    name: 'PostSleepBallsDialog5',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepBallsDialog5
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepLipsDialog5',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepLipsDialog5
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepTongueDialog5',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepTongueDialog5
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepTongueDialog6',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.postSleepTongueDialog6
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: ''
}, {
    name: 'PostSleepLactation1',
    locationTags: ['postSleep'],
    conditions: [
   		() => State.variables.lactationUnlocked,
        () => !State.variables.postSleepLactationDialog1
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Today, you wake up and immediately notice that something feels… off. There’s a peculiar tightness in your chest, though not the kind you can chalk up to muscle tightness or an odd sleep position. Rubbing your breasts, you find that they feel noticeably warmer than usual, and quite a bit more sensitive as well. Your bed sheet brushing against your chest as you pull it off is enough to make your nipples stiffen considerably. Going into the bathroom, you check your breasts to see what the problem is, but nothing seems out of the ordinary besides this weird tingling sensation. Well, that and some very unusual swelling. You make sure that they don\'t feel anything weird as your hands massage them a bit. Yeah, they just feel tighter and... maybe a bit bigger? You brush it as some random side-effect of the changes. At least, for now…<<set $postSleepLactationDialog1 to true>>'
}, {
    name: 'PostSleepLactation2',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.lactationUnlocked,
        () => State.variables.postSleepLactationDialog1,
        () => !State.variables.postSleepLactationDialog2
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'You wake up with an intense heat and fullness in your chest that nearly startles you as you open your eyes. Something is very wrong with your breasts this morning, and it hits you like a slap to the face. You rush into the bathroom and inspect your mammaries, trying to discern what is going on. Upon closer inspection, you see that your breasts are swollen, the skin more stretched than usual. Your nipples are extremely sensitive and stiff, and appear to have gotten larger as well. As you touch them, you moan and a dribble of a suspicious white fluid pours out. Your knees feel weak and you slide across the wall behind you, falling to the floor as your mind goes blank. Your entire body now feels this heat, traveling from your breasts into your torso and limbs. Your hands are still massaging your nipples as the creamy discharge leaks from it. There\'s no doubt now: you\'re lactating. With a shivering hand, you bring some of the liquid to your mouth, gently licking it up and... yeah. Milk. Sweet, creamy, and it tastes far better than you could have imagined. You have no idea how long it took until you fully recovered your consciousness, but you find yourself sitting on the floor, your clothing drenched and your breathing ragged. That was incredibly intense, and as you look around, you wonder what is wrong with you. Well, you know what is wrong with you. Those fucking concoctions. It seems like their side effects can cover quite a wide spectrum. Slowly, you get up and take stock of your predicament. Well, your breasts feel less swollen, so that is good. You\'re also sure they\'re not as sensitive anymore. But this is something you\'ll have to keep in mind, because if something like this happens in public it could get messy VERY quick.<<set $milkStored to 0>><<set $postSleepLactationDialog2 to true>>'
}, {
    name: 'PostSleepLactation3',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.lactationUnlocked,
        () => State.variables.postSleepLactationDialog1,
        () => State.variables.postSleepLactationDialog2,
        () => !State.variables.postSleepLactationDialog3
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'The sensation of wet sheets on your chest wakes you up, the moistness making you feel very awkward. As your mind starts making sense of the situation, your first reaction is to look for a leak on the ceiling, but you remember that you live in the basement, and the liquid on the sheets is warm and sticky. As you lift it up, the mystery is quickly solved: your breasts, bloated and swollen with milk once more, must have led to an episode of galactorrhea, causing your production to flow freely out of your nipples while you slept. Before, it would require manual pressure to be applied for it to be released. This time, it just came out by itself. While you have no idea how long this had been occurring, it is clear from the lingering tightness that it was just the overflow that is on your sheet, as your mammaries remain at capacity. Getting out of bed, you head into the bathroom and lean over the sink, letting your udders loom over the drain. Stifling back moans, you tug on your nipples and squeeze out jet after jet of ivory fluid, until the fullness you feel subsides to a more manageable level. What the fuck happened with your life... imagine when classes began again. Or if this happened while you were hanging out with friends. Would you need to leave for the bathroom to empty your boobs? And would anyone notice them just getting swollen?!? Hell, add that to your laundry list of mutations, what would they say? Until now, the changes had been... well, you could take them in stride. But this takes it to another level. You might have to keep an eye on your milk level going forward to avoid accidents. This is far from ideal.<<set $milkStored to 0>><<set $postSleepLactationDialog3 to true>>'
}, {
    name: 'PostSleepLactation4',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.lactationUnlocked,
        () => State.variables.postSleepLactationDialog1,
        () => State.variables.postSleepLactationDialog2,
        () => State.variables.postSleepLactationDialog3,
        () => !State.variables.postSleepLactationDialog4
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'Once more you wake up to an unplanned milk bath. It doesn\'t smell bad, it doesn\'t stain, but waking up in a puddle of your own milk is still somewhat disturbing. Pulling your sheets off to be washed and dried once again, you stumble out of bed and into the bathroom, leaving a dripping trail on the way. You grumble a bit while your chest throbs, still full. Once you make it to the sink, you start squeezing, forcing out a torrent of warm, creamy fluid. Each tug on your engorged nipples causes a gush of milk to fill the sink with a whizzing sound, slowly emptying your reserves. The annoying part is, it doesn\'t even feel that pleasurable anymore. You keep grumbling and squeezing your breasts, trying to get them somewhat empty before you start your day. You might actually have to add this to your morning routine from now on, emptying your tits above the sink before you start your day. What the fuck is happening to your life...<<set $lactationMorningRoutine to true>><<set $postSleepLactationDialog4 to true>>'
}, {
    name: 'PostSleepLactation5',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.lactationUnlocked,
        () => State.variables.postSleepLactationDialog1,
        () => State.variables.postSleepLactationDialog2,
        () => State.variables.postSleepLactationDialog3,
        () => State.variables.postSleepLactationDialog4,
        () => !State.variables.postSleepLactationDialog5
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: 'You wake up to the familiar feeling of an episode of galactorrhea, your bed drenched in milk as you get up with an annoyed sigh. Once again you head to the sink half-asleep, once again emptying your fucking tits... what a waste. But before you start, you get a random thought. What a waste. These days food has gotten a LOT more expensive and well, here you got something that SMELLS amazing. But come on, this is gross, right? Fucked up, even? Or perhaps unhealthy? It HAS to be! But... it smells good... and creamy... With hesitation, you lift up your breast, bringing the <<if $breasts > 100>>absurdly gigantic<<elseif $breasts >= 75>>humongous<<elseif $breasts >= 50>>huge<<elseif $breasts >= 25>>large<</if>> nipple to your mouth. Milk is streaming from it and... yeah, it smells pretty good. With some concern, you let your <<if $tongue >= 6>>appendage-lenght>><<elseif $tongue >=5>>ridiculously long<<elseif $tongue >= 3>>very long<<elseif $tongue >= 1>>long<</if>> tongue lick the hard nipple clean.<<set $postSleepLactationDialog5 to true>>'
}, {
    name: 'elenaGardenDate0',
    locationTags: ['postSleep'],
    conditions: [
        () => setup.hasEventBeenTriggered("elenaGymIntimacy")
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: ['elena'],
    content: `<<goto "elenaGardenDate0">>`
}, {
    name: 'GrowthSlowingDown_1',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.globalGrowthMod < 1
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: `You wake up after having determined to enter the contest. Immediately you decide that today is going to be a good day! Making some money to get that perfect look, or get a bit leaner, or add more mass; whatever you can do, it'll help you! After all, your entire degree is on the line. Yet you can't shake the feeling you're still tired. Odd.<<set $motivation -= 10>>`
}, {
    name: 'GrowthSlowingDown_2',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.globalGrowthMod < 1,
        () => setup.hasEventBeenTriggered("GrowthSlowingDown_1")
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: `Once more you wake up, ready to start the day preparing for the big event. Whether it's work, or lifting, you got to get ready! But for some reason you feel lethargic. And when you put on your clothing... is it just your imagination, or do they feel a bit looser? <<set $muscle -= (($muscle - 20) * 0.1)>><<set $height -= (($height - 150) * 0.1)>>`
}, {
    name: 'GrowthSlowingDown_3',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.globalGrowthMod < 1,
        () => setup.hasEventBeenTriggered("GrowthSlowingDown_2")
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: `Okay, normally you wake up quite refreshed. Today, not so much. When you wake up you double over with a splitting headache, and your body just feels LIMP. Despite the size of your body, it feels stretched out. Like substance in it is missing, while the form stays there. Even thinking that gives another headache, and limply you get up. Not a great start. And you had this more often lately... <<set $muscle -= (($muscle - 20) * 0.1)>><<set $height -= (($height - 150) * 0.1)>>`
}, {
    name: 'GrowthSlowingDown_4',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.globalGrowthMod < 1,
        () => setup.hasEventBeenTriggered("GrowthSlowingDown_3")
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: `Something is WRONG. For the last few days you've felt not great, like a flu hit you. But you also feel like you should've been... bigger right now. The growth has just been trailing off, you feel lathargic, right when you need the size the most for the contest! If this continues for much longer, you need to investigate this. <<set $muscle -= (($muscle - 20) * 0.1)>><<set $height -= (($height - 150) * 0.1)>>`
}, {
    name: 'GrowthSlowingDown_5',
    locationTags: ['postSleep'],
    conditions: [
        () => State.variables.globalGrowthMod < 1,
        () => setup.hasEventBeenTriggered("GrowthSlowingDown_4")
    ],
    repeatable: false,
    retriggerable: false,
    priority: 'immediate',
    npc: [],
    content: `Something is WRONG. For the last few days you've felt not great, like a flu hit you. But you also feel like you should've been... bigger right now. The growth has just been trailing off, you feel lathargic, right when you need the size the most for the contest! If this continues for much longer, you need to investigate this. <<set $muscle -= (($muscle - 20) * 0.1)>><<set $height -= (($height - 150) * 0.1)>>`
});