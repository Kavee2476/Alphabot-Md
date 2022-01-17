exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳කරුණාකර මොහොතක් ඉන්න~`
}

exports.ok = () => {
    return `✅ හරි Done~`
}

exports.err = () => {
    return `⚠️ දෝෂය මධ්යස්ථ විශේෂාංග`
}
exports.erorLink = () => {
    return `⚠️ සබැඳිය දෝෂයකි`
}
exports.media = () => {
    return `කරුණාකර ඔබට බාගත කිරීමට අවශ්‍ය මාධ්‍යය තෝරන්න`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `වැරදි ආකෘතියක් කරුණාකර භාවිතා කරන්නේ කෙසේදැයි පරීක්ෂා කරන්න di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ කරුණාකර ඔබට පැවසීමට අවශ්‍ය පණිවිඩය ඇතුළත් කරන්න!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Cමෙම විධානය විශේෂයෙන්ම අයිතිකරු සඳහා වේr!`
}

exports.doneOwner = () => {
    return `✅  ️ඒක ඉවරයි අයිතිකාරයා ~`
}

exports.groupOnly = () => {
    return `👥  මෙම විධානය භාවිතා කළ හැක්කේ කණ්ඩායම් වශයෙන් පමණි!`
}

exports.adminOnly = () => {
    return `🙅  මෙම විධානය භාවිතා කළ හැක්කේ කණ්ඩායම් පරිපාලකයින්ට පමණි!`
}

exports.nhFalse = () => {
    return `වලංගු නොවන කේතය!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ පරිශීලක පරිපාලකයෙක් නොවේ! ❎`
}

exports.adminAlready = () => {
    return `❎ පරිපාලකයෙකු වන පරිශීලකයෙකු ප්‍රවර්ධනය කළ නොහැක!`
}

exports.botNotAdmin = () => {
    return `මුලින්ම bot එක admin කෙනෙක් කරන්න! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
වාර්තා කිරීම ගැන ඔබට ස්තුතියි, ඔබගේ වාර්තාව අපට ඉක්මනින් ලැබෙනු ඇත.`
}

exports.videoLimit = () => {
    return `ගොනු ප්‍රමාණය ඉතා විශාලයි!`
}

exports.notNum = (q) => {
    return `"${q}", අංකයක් නොවේ!`
}
exports.menunya = (salam, pushname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya KΛVΣΣ, bot ini adalah Beta Multi-Device Whatsapp. 
මෙය whastapp User Bot කෙනෙකි! ඔබට අවශය විදනය තොරන්න 🙏      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname} 😖*
*⌚Time Server : ${time}*
*📚 List-Menu KΛVΣΣ :*

╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}sendsesi
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 Group 」 
├ ${prefix}antilink [on/off]
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]


╭─❒ 「 Search 」 
├ ${prefix}ytsearch [query]
├ ${prefix}film [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」 
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image]
├ ${prefix}utatoo [reply image]
├ ${prefix}unsharpen [reply image]
├ ${prefix}thanos [reply image]
├ ${prefix}sniper [reply image]
├ ${prefix}sharpen [reply image]
├ ${prefix}sepia [reply image]
├ ${prefix}scary [reply image]
├ ${prefix}rip [reply image]
├ ${prefix}redple [reply image]
├ ${prefix}rejected [reply image]
├ ${prefix}posterize [reply image]
├ ${prefix}ps4 [reply image]
├ ${prefix}pixelize [reply image]
├ ${prefix}missionpassed [reply image]
├ ${prefix}moustache [reply image]
├ ${prefix}lookwhatkarenhave [reply image]
├ ${prefix}jail [reply image]
├ ${prefix}invert [reply image]
├ ${prefix}instagram [reply image]
├ ${prefix}greyscale [reply image]
├ ${prefix}glitch [reply image]
├ ${prefix}gay [reply image]
├ ${prefix}frame [reply image]
├ ${prefix}fire [reply image]
├ ${prefix}distort [reply image]
├ ${prefix}dictator [reply image]
├ ${prefix}deepfry [reply image]
├ ${prefix}ddungeon [reply image]
├ ${prefix}circle [reply image]
├ ${prefix}challenger [reply image]
├ ${prefix}burn [reply image]
├ ${prefix}brazzers [reply image]
├ ${prefix}beautiful [reply image]
├ ${prefix}jail [reply image]
├ ${prefix}red [reply image]
├ ${prefix}gay [reply image]
├ ${prefix}bloo [reply image]
├ ${prefix}blue [reply image]
├ ${prefix}sepia [reply image]
├ ${prefix}green [reply image]
├ ${prefix}glass [reply image]
├ ${prefix}invert [reply image]
├ ${prefix}blurple [reply image]
├ ${prefix}blurple2 [reply image]
├ ${prefix}wasted [reply image]
├ ${prefix}passed [reply image]
├ ${prefix}triggered [reply image]
├ ${prefix}comrade [reply image]
├ ${prefix}greyscale [reply image]
├ ${prefix}threshold [reply image]
├ ${prefix}brightness [reply image]
╰❒ ${prefix}invertgreyscale [reply image]


╭─❒ 「 Download 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytshortmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}ytshorts [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
╰❒ ${prefix}twitter link


╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe

╭─❒ 「 Nsfw & Sfw 」
├ ${prefix}ahegao
├ ${prefix}ass
├ ${prefix}bdsm
├ ${prefix}blowjob
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}ero
├ ${prefix}femdom
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}manga
├ ${prefix}masturbation
├ ${prefix}neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}pussy
├ ${prefix}tentacles
├ ${prefix}thighs
├ ${prefix}yuri
├ ${prefix}feet
├ ${prefix}lewdkemo
├ ${prefix}woof
├ ${prefix}gasm
├ ${prefix}solo
├ ${prefix}8ball
├ ${prefix}goose
├ ${prefix}avatar
├ ${prefix}hololewd
├ ${prefix}gecg
├ ${prefix}holo
├ ${prefix}fox_girl
├ ${prefix}tits
├ ${prefix}eroyuri
├ ${prefix}holoyero
├ ${prefix}lizard
├ ${prefix}keta
├ ${prefix}eron
├ ${prefix}erok
├ ${prefix}kemonomimi
├ ${prefix}cum_jpg
├ ${prefix}nsfw_avatar
├ ${prefix}erofeet
├ ${prefix}meow
├ ${prefix}wallpaper
├ ${prefix}waifu
├ ${prefix}trap
├ ${prefix}lewd
├ ${prefix}pussy_jpg
├ ${prefix}futanari
├ ${prefix}lewdk
├ ${prefix}solog
├ ${prefix}smug
├ ${prefix}cum
├ ${prefix}slap
├ ${prefix}les
├ ${prefix}erokemo
├ ${prefix}bj
├ ${prefix}pwankg
├ ${prefix}pat
├ ${prefix}poke
├ ${prefix}feed
├ ${prefix}nsfw_neko_gif
├ ${prefix}pussy
├ ${prefix}feetg
├ ${prefix}baka
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}tickle
├ ${prefix}spank
├ ${prefix}kuni
├ ${prefix}classic
├ ${prefix}boobs
├ ${prefix}anal
├ ${prefix}ngif
├ ${prefix}cuddle
╰❒ ${prefix}zettai

╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}pornhub text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text


╭─❒ 「 Others 」
├ ${prefix}kalkulator
├ ${prefix}smeme [text]
├ ${prefix}memegen [text|text]
╰❒
╭─❒ 「 TqTo 」 
├ විමුක්ති ඔශද
╰❒ And All Support

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. bot හට spam කිරිමෙන් වලකින්න. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. බොට් එකට කතා කරන්න එපා. ☎️
Sanksi: *❎ SOFT BLOCK*

3. බොට් එක ගසාකන්න එපා.😖
Sanksi: *PERMANENT BLOCK*

🗯️ ප්‍රතිචාර දැක්වීමට බොට් නැත හෝ මන්දගාමී වේ ?
➡️ ජාලය, සංඥා, Whatsapp මගින් තහනම් කිරීම සහ යම් හේතුවක් නිසා බලපෑ හැකිය. දිගටම නීති පිළිපදින්න‼️

🗯️ මට කොහෙන්ද මේ bot එකෙන් script එක ?
➡️ මෙම ස්ක්‍රිප්ටය තවමත් පුද්ගලික වන අතර කිසි විටෙක වෙළඳාම් කර නොමැත, වංචාකරුවන් දැන ගැනීමට බුද්ධිමත් වන්න.

🗯️ මට group එකට add කරන්න පුලුවන්ද?
➡️ ටික වේලාවකට බොට් එකට තත්ත්‍වය එක් කිරීමට නොමිලේ.

🗯️ උපසර්ගය කුමක්ද??
➡️ මෙම බොට් බහු උපසර්ග භාවිතා කරයි. එයින් අදහස් වන්නේ ඔබට #, උපසර්ගය භාවිතා කළ හැකි බවයි. , සහ වෙනත් සාධාරණ උපසර්ගය.

🗯️සිස්, කොහොමද චැට් හිමිකරු ප්‍රතිචාර නොදක්වන්නේ?
➡️ හිමිකරු ප්‍රතිචාර දක්වන්නේ බොට්ස් සහ දෝෂ ගැටලු පිළිබඳ ප්‍රශ්නවලට පමණි, හඳුනන අය සඳහා හෝ ස්ක්‍රිප්ට් හිඟාකෑමට නොවේ.


ඔබට නීති තේරෙනවා නම් කරුණාකර ටයිප් කරන්න *${prefix}allmenu* ආරම්භ කිරීමට!

⚠️ Alphabot හි සියලුම ප්‍රතිපත්ති සහ ප්‍රතිපාදන හිමිකරු විසින් දරනු ලබන අතර සියලුම ප්‍රතිපත්ති වෙනස් කිරීම්, ඕනෑම අවස්ථාවක හිමිකරුට පරිශීලකයන් අවලංගු කිරීමට, අවහිර කිරීමට අයිතිය ඇත (*﹏*)

බොහොම ස්තූතියි! ඔබ සඳහා, මිත්‍රශීලී පරිශීලකයින් සහ KΛVΣΣ නිර්මාණය කිරීමේ ව්‍යාපෘතියට උදවු කළ සමහර පුද්ගලයින් සඳහා
😖🙏
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
📛 𝖭𝖺𝗆𝖺 :
🔞 𝖴𝗆𝗎𝗋 :
🧑 𝖦𝖾𝗇𝖽𝖾𝗋 :
🏙️ 𝖠𝗌𝗄𝗈𝗍 :
╰ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*── 「 SOURCE 」 ──*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://github.com/Kavee2476
`
}
exports.tos = (ownernomer) => {
    return `
*── 「 DONATE 」 ──*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

Thanks!

Contact person Owner:
wa.me/${ownernomer} (Owner)

    `
}

exports.ownermenu = (prefix) =>{
return`*Owner*
• < evaluate
• > evaluate
• $ exec
• => exec
• ${prefix}setmenu [query]
• ${prefix}setmenu templateLocation
• ${prefix}setmenu templateTenor
• ${prefix}sendsesi
• ${prefix}join [link]
• ${prefix}self
• ${prefix}public [only bot]
• ${prefix}del [pesan bot]
• ${prefix}setppbot [reply image]
`}

exports.group = (prefix) =>{
	return`*Group* 
• ${prefix}antilink [on/off]
• ${prefix}revoke
• ${prefix}leave
• ${prefix}add [62***]
• ${prefix}kick @tag
• ${prefix}leave
• ${prefix}linkgc
• ${prefix}group [open/close]
• ${prefix}tagall [text]
• ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`*Anime*
• ${prefix}quotesanime
• ${prefix}anime [query]
• ${prefix}manga [query]
• ${prefix}character [query]
`}

exports.search = (prefix) =>{
	return`*Search*
• ${prefix}ytsearch [query]
• ${prefix}film [query]
• ${prefix}wallpaper [query]
• ${prefix}wikimedia [query]
• ${prefix}hentai
• ${prefix}wattpad [query]
• ${prefix}webtoons [query]
• ${prefix}drakor [query]
• ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`*Converter*
• ${prefix}stiker [reply image]
• ${prefix}tourl [image/video]
• ${prefix}togif [sticker]
• ${prefix}tomp4 [sticker]
• ${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`*Image Effect*
• ${prefix}wanted [reply image]
• ${prefix}utatoo [reply image]
• ${prefix}unsharpen [reply image]
• ${prefix}thanos [reply image]
• ${prefix}sniper [reply image]
• ${prefix}sharpen [reply image]
• ${prefix}sepia [reply image]
• ${prefix}scary [reply image]
• ${prefix}rip [reply image]
• ${prefix}redple [reply image]
• ${prefix}rejected [reply image]
• ${prefix}posterize [reply image]
• ${prefix}ps4 [reply image]
• ${prefix}pixelize [reply image]
• ${prefix}missionpassed [reply image]
• ${prefix}moustache [reply image]
• ${prefix}lookwhatkarenhave [reply image]
• ${prefix}jail [reply image]
• ${prefix}invert [reply image]
• ${prefix}instagram [reply image]
• ${prefix}greyscale [reply image]
• ${prefix}glitch [reply image]
• ${prefix}gay [reply image]
• ${prefix}frame [reply image]
• ${prefix}fire [reply image]
• ${prefix}distort [reply image]
• ${prefix}dictator [reply image]
• ${prefix}deepfry [reply image]
• ${prefix}ddungeon [reply image]
• ${prefix}circle [reply image]
• ${prefix}challenger [reply image]
• ${prefix}burn [reply image]
• ${prefix}brazzers [reply image]
• ${prefix}beautiful [reply image]
• ${prefix}jail [reply image]
• ${prefix}red [reply image]
• ${prefix}gay [reply image]
• ${prefix}bloo [reply image]
• ${prefix}blue [reply image]
• ${prefix}sepia [reply image]
• ${prefix}green [reply image]
• ${prefix}glass [reply image]
• ${prefix}invert [reply image]
• ${prefix}blurple [reply image]
• ${prefix}blurple2 [reply image]
• ${prefix}wasted [reply image]
• ${prefix}passed [reply image]
• ${prefix}triggered [reply image]
• ${prefix}comrade [reply image]
• ${prefix}greyscale [reply image]
• ${prefix}threshold [reply image]
• ${prefix}brightness [reply image]
• ${prefix}invertgreyscale [reply image]
`
}

exports.download = (prefix) =>{
return`*Download*
• ${prefix}tiktok [link]
• ${prefix}tiktoknowm [link]
• ${prefix}tiktokwm [link]
• ${prefix}tiktokaudio [link]
• ${prefix}ytdl [link]
• ${prefix}play [query]
• ${prefix}ytmp3 [link]
• ${prefix}ytshortmp3 [link]
• ${prefix}ytmp4 [link]
• ${prefix}ytshorts [link]
• ${prefix}facebook [link]
• ${prefix}facebooksd [link]
• ${prefix}facebookhd [link]
• ${prefix}fbaudio [link]
• ${prefix}igstory [username]
• ${prefix}igdl [link]
• ${prefix}igphoto [link]
• ${prefix}igvideo [link]
• ${prefix}igreels [link]
• ${prefix}igtv [link]
• ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`*Random Anime*
• ${prefix}loli
• ${prefix}neko
• ${prefix}waifu
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}bully
• ${prefix}cuddle
• ${prefix}cry
• ${prefix}hug
• ${prefix}awoo
• ${prefix}kiss
• ${prefix}lick
• ${prefix}pat
• ${prefix}smug
• ${prefix}bonk
• ${prefix}yeet
• ${prefix}blush
• ${prefix}smile
• ${prefix}wave
• ${prefix}highfive
• ${prefix}handhold
• ${prefix}nom
• ${prefix}bite
• ${prefix}glomp
• ${prefix}slap
• ${prefix}kill
• ${prefix}happy
• ${prefix}wink
• ${prefix}poke
• ${prefix}dance
• ${prefix}cringe
`
}

exports.textpro = (prefix) =>{
	return`*Textpro*
• ${prefix}halloween2 text|text2
• ${prefix}horror text|text2
• ${prefix}game8bit text|text2
• ${prefix}layered text|text2
• ${prefix}glitch2 text|text2
• ${prefix}coolg text|text2
• ${prefix}coolwg text|text2
• ${prefix}realistic text|text2
• ${prefix}space3d text|text2
• ${prefix}gtiktok text|text2
• ${prefix}stone text|text2
• ${prefix}marvel text|text2
• ${prefix}marvel2 text|text2
• ${prefix}pornhub text|text2
• ${prefix}avengers text|text2
• ${prefix}metalr text|text2
• ${prefix}metalg text|text2
• ${prefix}metalg2 text|text2
• ${prefix}halloween2 text|text2
• ${prefix}lion text|text2
• ${prefix}wolf_bw text|text2
• ${prefix}wolf_g text|text2
• ${prefix}ninja text|text2
• ${prefix}3dsteel text|text2
• ${prefix}horror2 text|text2
• ${prefix}lava text|text2
• ${prefix}bagel text|text2
• ${prefix}blackpink text
• ${prefix}rainbow2 text
• ${prefix}water_pipe text
• ${prefix}halloween text
• ${prefix}sketch text
• ${prefix}sircuit text
• ${prefix}discovery text
• ${prefix}metallic2 text
• ${prefix}fiction text
• ${prefix}demon text
• ${prefix}transformer text
• ${prefix}berry text
• ${prefix}thunder text
• ${prefix}magma text
• ${prefix}3dstone text
• ${prefix}neon text
• ${prefix}glitch text
• ${prefix}harry_potter text
• ${prefix}embossed text
• ${prefix}broken text
• ${prefix}papercut text
• ${prefix}gradient text
• ${prefix}glossy text
• ${prefix}watercolor text
• ${prefix}multicolor text
• ${prefix}neon_devil text
• ${prefix}underwater text
• ${prefix}bear text
• ${prefix}wonderfulg text
• ${prefix}christmas text
• ${prefix}neon_light text
• ${prefix}snow text
• ${prefix}cloudsky text
• ${prefix}luxury2 text
• ${prefix}gradient2 text
• ${prefix}summer text
• ${prefix}writing text
• ${prefix}engraved text
• ${prefix}summery text
• ${prefix}3dglue text
• ${prefix}metaldark text
• ${prefix}neonlight text
• ${prefix}oscar text
• ${prefix}minion text
• ${prefix}holographic text
• ${prefix}purple text
• ${prefix}glossyb text
• ${prefix}deluxe2 text
• ${prefix}glossyc text
• ${prefix}fabric text
• ${prefix}neonc text
• ${prefix}newyear text
• ${prefix}newyear2 text
• ${prefix}metals text
• ${prefix}xmas text
• ${prefix}blood text
• ${prefix}darkg text
• ${prefix}joker text
• ${prefix}wicker text
• ${prefix}natural text
• ${prefix}firework text
• ${prefix}skeleton text
• ${prefix}balloon text
• ${prefix}balloon2 text
• ${prefix}balloon3 text
• ${prefix}balloon4 text
• ${prefix}balloon5 text
• ${prefix}balloon6 text
• ${prefix}balloon7 text
• ${prefix}steel text
• ${prefix}gloss text
• ${prefix}denim text
• ${prefix}decorate text
• ${prefix}decorate2 text
• ${prefix}peridot text
• ${prefix}rock text
• ${prefix}glass text
• ${prefix}glass2 text
• ${prefix}glass3 text
• ${prefix}glass4 text
• ${prefix}glass5 text
• ${prefix}glass6 text
• ${prefix}glass7 text
• ${prefix}glass8 text
• ${prefix}captain_as2 text
• ${prefix}robot text
• ${prefix}equalizer text
• ${prefix}toxic text
• ${prefix}sparkling text
• ${prefix}sparkling2 text
• ${prefix}sparkling3 text
• ${prefix}sparkling4 text
• ${prefix}sparkling5 text
• ${prefix}sparkling6 text
• ${prefix}sparkling7 text
• ${prefix}decorative text
• ${prefix}chocolate text
• ${prefix}strawberry text
• ${prefix}koifish text
• ${prefix}bread text
• ${prefix}matrix text
• ${prefix}blood2 text
• ${prefix}neonligth2 text
• ${prefix}thunder2 text
• ${prefix}3dbox text
• ${prefix}neon2 text
• ${prefix}roadw text
• ${prefix}bokeh text
• ${prefix}gneon text
• ${prefix}advanced text
• ${prefix}dropwater text
• ${prefix}wall text
• ${prefix}chrismast text
• ${prefix}honey text
• ${prefix}drug text
• ${prefix}marble text
• ${prefix}marble2 text
• ${prefix}ice text
• ${prefix}juice text
• ${prefix}rusty text
• ${prefix}abstra text
• ${prefix}biscuit text
• ${prefix}wood text
• ${prefix}scifi text
• ${prefix}metalr text
• ${prefix}purpleg text
• ${prefix}shiny text 
• ${prefix}jewelry text
• ${prefix}jewelry2 text
• ${prefix}jewelry3 text
• ${prefix}jewelry4 text
• ${prefix}jewelry5 text
• ${prefix}jewelry6 text
• ${prefix}jewelry7 text
• ${prefix}jewelry8 text
• ${prefix}metalh text
• ${prefix}golden text
• ${prefix}glitter text
• ${prefix}glitter2 text
• ${prefix}glitter3 text
• ${prefix}glitter4 text
• ${prefix}glitter5 text
• ${prefix}glitter6 text
• ${prefix}glitter7 text
• ${prefix}metale text
• ${prefix}carbon text
• ${prefix}candy text
• ${prefix}metalb text
• ${prefix}gemb text
• ${prefix}3dchrome text
• ${prefix}metalb2 text
• ${prefix}metalg text
• ${prefix}metalg text
`
}

exports.nsfw = (prefix) =>{
	return`*Nsfw & Sfw*
• ${prefix}ahegao
• ${prefix}ass
• ${prefix}bdsm
• ${prefix}blowjob
• ${prefix}cuckold
• ${prefix}cum
• ${prefix}ero
• ${prefix}femdom
• ${prefix}foot
• ${prefix}gangbang
• ${prefix}glasses
• ${prefix}jahy
• ${prefix}manga
• ${prefix}masturbation
• ${prefix}neko
• ${prefix}orgy
• ${prefix}panties
• ${prefix}pussy
• ${prefix}tentacles
• ${prefix}thighs
• ${prefix}yuri
• ${prefix}feet
• ${prefix}lewdkemo
• ${prefix}woof
• ${prefix}gasm
• ${prefix}solo
• ${prefix}8ball
• ${prefix}goose
• ${prefix}avatar
• ${prefix}hololewd
• ${prefix}gecg
• ${prefix}holo
• ${prefix}fox_girl
• ${prefix}tits
• ${prefix}eroyuri
• ${prefix}holoyero
• ${prefix}lizard
• ${prefix}keta
• ${prefix}eron
• ${prefix}erok
• ${prefix}kemonomimi
• ${prefix}cum_jpg
• ${prefix}nsfw_avatar
• ${prefix}erofeet
• ${prefix}meow
• ${prefix}wallpaper
• ${prefix}waifu
• ${prefix}trap
• ${prefix}lewd
• ${prefix}pussy_jpg
• ${prefix}futanari
• ${prefix}lewdk
• ${prefix}solog
• ${prefix}smug
• ${prefix}cum
• ${prefix}slap
• ${prefix}les
• ${prefix}erokemo
• ${prefix}bj
• ${prefix}pwankg
• ${prefix}pat
• ${prefix}poke
• ${prefix}feed
• ${prefix}nsfw_neko_gif
• ${prefix}pussy
• ${prefix}feetg
• ${prefix}baka
• ${prefix}hug
• ${prefix}kiss
• ${prefix}tickle
• ${prefix}spank
• ${prefix}kuni
• ${prefix}classic
• ${prefix}boobs
• ${prefix}anal
• ${prefix}ngif
• ${prefix}cuddle
• ${prefix}zettai
`
}

exports.other = (prefix) =>{
return`*Others*
• ${prefix}kalkulator
• ${prefix}smeme [text]
• ${prefix}memegen [text|text]

`
}

exports.tqto = () =>{
	return`*Thanks To*
•විමුක්ති ඔශද
`
}
