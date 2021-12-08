const mappedEmojis = JSON.parse(
	'{"emojiMap":{"111111":"◾","303231":"🕶","326855":"🇹🇲","333334":"🏴","363028":"💂🏿","373636":"🖤","386576":"🇨🇽","388329":"🇨🇨","397856":"🇹🇿","403028":"✍🏿","438778":"🇧🇸","444444":"🕳","445169":"🖲","453730":"💆🏿","464646":"🐾","473931":"👦🏿","474751":"🙏🏿","475159":"🛴","475376":"🇵🇳","484848":"➕","494332":"🎩","494949":"➖","505051":"🖥","513168":"🇨🇰","518152":"🇲🇷","525356":"👮🏾","525458":"🎥","533165":"🇰🇾","535456":"⛏","536376":"🚲","544036":"👌🏿","547753":"🐊","555354":"🏋🏿","555549":"🌘","574432":"🇱🇾","593761":"🇹🇨","594729":"👸🏿","595550":"🤹🏿","599377":"🇷🇼","614331":"👧🏾","615750":"🙋🏿","626162":"🎬","636263":"👮🏽","648648":"🐢","655042":"🦇","655537":"🇻🇺","658398":"🌏","666461":"🇳🇦","666766":"🎤","674532":"🇲🇼","675446":"🐗","677278":"🚔","688594":"🌍","696767":"🦍","697483":"🚝","704549":"🕹","706052":"🤹🏾","706254":"⛹🏿","709967":"🇬🇦","713356":"🇱🇮","716254":"🕵🏾","716676":"🚶🏽","718086":"🔊","722928":"🇦🇴","726081":"🇦🇸","727169":"🗿","736256":"🙇🏾","736357":"👩🏻","737679":"📹","745745":"🤦🏾","746756":"🐧","767676":"📓","769362":"🛣","774831":"🥀","776963":"🏋🏽","777082":"🚶🏻","777465":"🇵🇸","777676":"🐺","784768":"🤰🏾","786669":"🇬🇲","787571":"🦏","787975":"👮🏼","788075":"🚍","806653":"🙋🏾","807354":"🇲🇺","817061":"🤹🏽","823733":"💃🏻","827268":"🙆🏾","835436":"👶🏾","837864":"🤽🏿","838688":"🖨","838878":"🚟","844936":"👞","846059":"🦃","847532":"🐝","847726":"🎋","848990":"🏬","857445":"🇪🇹","859495":"👽","865879":"🤰🏻","867566":"🤵🏻","874125":"🌰","875433":"👉🏾","875839":"🙌🏾","878176":"🚵🏿","885059":"🇲🇳","885939":"👋🏾","887362":"👧🏻","887857":"👱🏿","889482":"🏔","895356":"🔇","898989":"🔘","906546":"👲🏽","906567":"🇮🇶","906568":"🇸🇾","907389":"🇳🇱","916446":"👨🏽","919378":"🇰🇲","928072":"🙆🏽","928243":"🇸🇳","928976":"🚵","936348":"🇷🇴","937340":"🇨🇲","938571":"🤹🏼","939734":"⛳","946540":"🎻","946747":"🍱","948437":"🇲🇱","949220":"🌽","954438":"💃🏼","956040":"🇹🇩","957157":"🤦🏽","958665":"👨‍👨‍👧","968946":"🚕","979778":"🇧🇮","979795":"🗞","988475":"🤦🏻","996092":"🇸🇮","996566":"🇾🇪","997766":"🇸🇨","998062":"🤽🏾","998435":"🍍","998782":"🤶🏿","e3b440":"😀","e2b649":"😁","d0b354":"😂","d8b34b":"🤣","e0af3e":"😃","e1b240":"😄","d3b04e":"😅","e1b140":"😆","ebb838":"😉","ecb334":"😊","edb63e":"😋","c29837":"😎","eb9b37":"😍","edb03a":"😘","f0bc39":"😗","eeb938":"😙","ecb437":"😚","000000":"◼","efbc39":"😕","ecab36":"🤗","efbc3a":"🤔","ecb938":"😐","eeba39":"😑","f2bd39":"😶","e4bc59":"🙄","ebb939":"😖","eab738":"😣","e0bb48":"😥","edb937":"😯","e3b747":"🤐","daba4c":"😪","deaa33":"😫","dcaf41":"😴","ebb837":"😌","d4a739":"🤓","ebb142":"😛","e4af50":"😜","e9af41":"😝","e8b73b":"🤤","ecba39":"😒","d7b84f":"😓","ebb938":"😔","efbc38":"🙃","d9b435":"🤑","e8b437":"😲","eeba38":"🙁","efbd3a":"😞","ebb737":"😟","e7bf56":"😤","e0ba47":"😢","cab159":"😭","edba38":"😦","eab736":"😧","b7a06a":"😨","e0ac34":"😩","e7ba4b":"😬","ada47a":"😰","bda474":"😱","dfb255":"😳","e2ae32":"😵","eb7926":"😡","edba39":"😠","c9ab58":"😇","b38937":"🤠","d2a08d":"🤡","eab73a":"🤥","e4bd67":"😷","eab240":"🤒","dfb65b":"🤕","91ac1b":"🤢","e8bf55":"🤧","8a3c9b":"😈","8c3d9c":"👿","9a4335":"👹","b03f35":"👺","bdc0c0":"💀","b1a9ae":"👻","4e3e62":"👾","7b9d9f":"🤖","8d6449":"💩","c5a043":"😺","c39e41":"😸","b0a462":"😹","cd8c39":"😻","caa33d":"😼","cfa03d":"😽","caa74f":"🙀","c2a74d":"😿","c69f3b":"😾","bb9870":"🙈","b89870":"🙉","bb986e":"🙊","e9b837":"👦","9c826c":"👦🏻","cbaa75":"👦🏼","986a4a":"👦🏽","6f4c35":"👦🏾","e8b738":"👧","c4a16c":"👧🏼","875d3f":"👧🏽","3d322e":"👧🏿","e6b433":"👨","99806d":"👨🏻","cca876":"👨🏼","6a4833":"👨🏾","41342f":"👨🏿","ddab35":"👩","c6a876":"👩🏼","835d43":"👩🏽","5a4133":"👩🏾","3d3531":"👩🏿","e8b52d":"👴","dec1a6":"👴🏻","caa888":"👴🏼","a98269":"👴🏽","8e654a":"👴🏾","5b4b43":"👴🏿","dfaf36":"👵","c0ae9f":"👵🏻","b6a291":"👵🏼","a38e81":"👵🏽","937f71":"👵🏾","7f7672":"👵🏿","e4af27":"👶","ddba9b":"👶🏻","d0a67f":"👶🏼","aa7b5c":"👶🏽","48372f":"👶🏿","e0b745":"👼","ddc19e":"👼🏻","d2b087":"👼🏼","b7906c":"👼🏽","9c7450":"👼🏾","73614e":"👼🏿","7f7a4f":"👮","72777a":"👮🏻","3d4954":"👮🏿","917e4f":"🕵","8a7f70":"🕵🏻","8b7c6a":"🕵🏼","7d6d5e":"🕵🏽","615b53":"🕵🏿","4a3f27":"💂","4b4337":"💂🏻","483e32":"💂🏼","43392d":"💂🏽","3e3429":"💂🏾","d5af46":"👷","cfb272":"👷🏻","ceae6a":"👷🏼","bd9c5c":"👷🏽","ae8d4d":"👷🏾","99824a":"👷🏿","ceb370":"👳","c7b8a9":"👳🏻","c4b09c":"👳🏼","b19b8a":"👳🏽","9f897a":"👳🏾","867d78":"👳🏿","dcb649":"👱","dbbf90":"👱🏻","ceb180":"👱🏼","bb9c6e":"👱🏽","a7875a":"👱🏾","d3a95c":"🎅","d4bdb0":"🎅🏻","ceb4a6":"🎅🏼","c3a99d":"🎅🏽","b99e92":"🎅🏾","a89691":"🎅🏿","d5b277":"🤶","d4baab":"🤶🏻","cbae9e":"🤶🏼","bb9f92":"🤶🏽","ad9184":"🤶🏾","d4a12a":"👸","8d724d":"👸🏻","bc9556":"👸🏼","8c6437":"👸🏽","72532d":"👸🏾","d4ac33":"🤴","c2a25e":"🤴🏻","c6a359":"🤴🏼","af8a47":"🤴🏽","9c7936":"🤴🏾","826d35":"🤴🏿","d3b670":"👰","b7a89a":"👰🏻","cab69d":"👰🏼","a99180":"👰🏽","947f72":"👰🏾","7b7470":"👰🏿","c39c3e":"🤵","b59d74":"🤵🏼","85634a":"🤵🏽","664c3b":"🤵🏾","463c38":"🤵🏿","b27468":"🤰","ab7888":"🤰🏼","8b546f":"🤰🏽","6a4268":"🤰🏿","ba861f":"👲","af886a":"👲🏻","ab7f5a":"👲🏼","7b5134":"👲🏾","5d4230":"👲🏿","d9b253":"🙍","9c8a7c":"🙍🏻","ccb38a":"🙎🏼","9c7a61":"🙍🏽","7c6251":"🙍🏾","5c524e":"🙍🏿","d9b252":"🙎","9d8b7c":"🙎🏻","9c7960":"🙎🏽","7c6150":"🙎🏾","5b514d":"🙎🏿","c7ac6b":"🙅","a2968a":"🙅🏻","c0ae92":"🙅🏼","a18976":"🙅🏽","8c786a":"🙅🏾","756d68":"🙅🏿","b19c69":"🙆","978c84":"🙆🏻","ab9b86":"🙆🏼","6e6866":"🙆🏿","cdac5a":"💁","a08f82":"💁🏻","c2ab8a":"💁🏼","9c7e6a":"💁🏽","826a5a":"💁🏾","665d58":"💁🏿","ccaa55":"🙋","a08e7e":"🙋🏻","c1aa86":"🙋🏼","9c7d63":"🙋🏽","b59851":"🙇","81746a":"🙇🏻","ac9a7c":"🙇🏼","8c725f":"🙇🏽","5f5854":"🙇🏿","dab244":"🤦","c5ac83":"🤦🏼","4f4540":"🤦🏿","baa673":"🤷","9c938a":"🤷🏻","ae9f8a":"🤷🏼","9a887a":"🤷🏽","8a7b70":"🤷🏾","77726f":"🤷🏿","dcab36":"💆","b99d85":"💆🏻","cba67c":"💆🏼","9d7154":"💆🏽","754e36":"💆🏾","d1ac53":"💇","a39284":"💇🏻","c6af8d":"💇🏼","9d7f69":"⛹🏽","816a5b":"💇🏾","665e5a":"💇🏿","8b7e71":"🚶","857b84":"🚶🏼","665d6f":"🚶🏾","5b596f":"🚶🏿","bea46d":"🏃","b0a097":"🏃🏻","b6a392":"🏃🏼","a28b81":"🏃🏽","8a766d":"🏃🏾","736c6d":"🏃🏿","9b471e":"💃","7a2a26":"💃🏽","70221f":"💃🏾","621c20":"💃🏿","7a4163":"🕺","723c6f":"🕺🏻","773f6d":"🕺🏼","6d3567":"🕺🏽","662f62":"🕺🏾","5e2c62":"🕺🏿","a57f26":"👯","4d4232":"🕴","6083a5":"🗣","6289aa":"👤","638aab":"👥","a6a09a":"🤺","604b3c":"🏇","83867c":"⛷","7e6c62":"🏂","9c8f6d":"🏌","d99e49":"🏄","d6a171":"🏄🏻","d69e68":"🏄🏼","c48c5c":"🏄🏽","b57e4f":"🏄🏾","a1744d":"🏄🏿","ce6a47":"🚣","c86752":"🚣🏻","cc6b53":"🚣🏼","c4614c":"🚣🏽","be5b47":"🚣🏾","b75a48":"🚣🏿","c1c4b1":"🏊","c3c8c7":"🏊🏻","bdc0be":"🏊🏼","b3b7b7":"🏊🏽","abafaf":"🏊🏾","9faaae":"🏊🏿","c1a263":"⛹","b29880":"⛹🏻","ab8b6d":"⛹🏼","8b705a":"⛹🏾","8c7c53":"🏋","8a8078":"🏋🏻","887b6f":"🏋🏼","685c56":"🏋🏾","746c52":"🚴","766f65":"🚴🏻","736b61":"🚴🏼","6b635b":"🚴🏽","655d55":"🚴🏾","5c5954":"🚴🏿","938a7e":"🚵🏻","92897c":"🚵🏼","8e857a":"🚵🏽","8b8277":"🚵🏾","a33e3f":"🏎","5c5f60":"🏍","cdae66":"🤸","c3ae9d":"🤸🏻","c6ac91":"🤸🏼","a78a77":"🤸🏽","917c6b":"🤸🏾","766d68":"🤸🏿","b48535":"🤼","a47c45":"🤼🏿","c3a665":"🤽","c8ad8a":"🤽🏻","c0a481":"🤽🏼","ac9173":"🤽🏽","bca97c":"🤾","b8aa9d":"🤾🏻","b6a595":"🤾🏼","a49388":"🤾🏽","96867c":"🤾🏾","837e7b":"🤾🏿","9b884e":"🤹","94897b":"🤹🏻","af8444":"👫","9f7846":"👬","c28e42":"👭","eda45e":"💏","eba155":"👩‍❤️‍💋‍👨","f1a65a":"👨‍❤️‍💋‍👨","e49c51":"👩‍❤️‍💋‍👩","e49d5d":"💑","e19c56":"👩‍❤️‍👨","e39d5a":"👨‍❤️‍👨","dc9651":"👩‍❤️‍👩","c6aa66":"👪","b37341":"👨‍👩‍👦","b67741":"👨‍👩‍👧","c18d3a":"👨‍👩‍👧‍👦","bc893b":"👨‍👩‍👦‍👦","c4903a":"👨‍👩‍👧‍👧","8f8367":"👨‍👨‍👦","b2954b":"👨‍👨‍👧‍👦","ac914c":"👨‍👨‍👦‍👦","b89749":"👨‍👨‍👧‍👧","d37f2c":"👩‍👩‍👦","d4822d":"👩‍👩‍👧","d29231":"👩‍👩‍👧‍👦","d08e30":"👩‍👩‍👦‍👦","d39432":"👩‍👩‍👧‍👧","e7d1bb":"🏻","d6bba1":"🏼","bf9e85":"🏽","a68169":"🏾","7a6d66":"🏿","f3b930":"💪","f3d0ae":"💪🏻","ddb58e":"💪🏼","b78562":"💪🏽","915c38":"👍🏾","523e34":"🖐🏿","9c947b":"🤳","9e9993":"🤳🏻","9a938d":"🤳🏼","8f8884":"🤳🏽","877f7a":"🤳🏾","79797a":"🤳🏿","f4bc37":"👉","edc4a2":"👉🏻","d4a57d":"👈🏼","a97959":"👉🏽","4b382f":"👉🏿","d4a47d":"👉🏼","f0b52e":"☝","f1ccaa":"👃🏻","dcb28b":"☝🏼","b58260":"👂🏽","8e5936":"☝🏾","503c33":"🤛🏿","f2b935":"👆","f0caa9":"👆🏻","d8aa83":"👆🏼","ae7d5d":"👆🏽","8b5735":"👐🏾","4e3a31":"👆🏿","f1b632":"🖕","efc8a6":"🤜🏻","d6a881":"🖕🏼","ac7c5c":"🖕🏽","8a5634":"🖕🏾","4d3930":"🖕🏿","f3ba35":"👇","f3cfaf":"✋🏻","daae87":"👃🏼","b38361":"👇🏽","905b37":"👃🏾","503d33":"🤜🏿","edb532":"✌","efc9a6":"✌🏻","daaf88":"✊🏼","b07e5e":"✌🏽","4d3a31":"👐🏿","edb631":"🤞","f1cdab":"🤘🏻","dab28b":"🤞🏼","b48360":"🤞🏽","8e5a37":"🤞🏾","f3ba33":"🖖","f4d0b0":"🖖🏻","b58462":"🖖🏽","513d34":"🤚🏿","efb631":"🤘","dcb38c":"🤘🏼","b58360":"🤘🏽","8f5b37":"🤘🏾","503d34":"🤘🏿","f3bc37":"🤙","f3d0af":"🤙🏻","ddb58f":"🤙🏼","b98763":"🤙🏽","935e39":"🤙🏾","533f35":"🤙🏿","f4bd34":"🖐","f4d2b2":"🖐🏻","dbb08a":"🖐🏼","b58563":"🖐🏽","925d38":"🖐🏾","f3bb33":"✋","b48361":"✋🏽","f1ba3b":"👌","f0ccac":"👌🏻","dbb18c":"👌🏼","b38565":"👌🏽","915e3a":"👌🏾","f7c13d":"👍","f2cfad":"👍🏻","d9ad86":"👊🏼","b88562":"👍🏽","533e35":"👃🏿","f2b834":"👎","b3815f":"👎🏽","8f5a37":"👎🏾","ecb232":"✊","efc9a7":"✊🏻","af7e5d":"✊🏽","8c5836":"✊🏾","4e3b32":"✊🏿","eeb12d":"👊","edc5a2":"👊🏻","ae7b5c":"👊🏽","8c5735":"👊🏾","edb436":"🤛","d9af88":"🤛🏼","ab7b5a":"🤛🏽","ecb436":"🤜","daaf89":"🤜🏼","ac7b5b":"🤜🏽","f1b944":"🤚","f4d1b0":"🤚🏻","dbb089":"🤚🏼","b78463":"🤚🏽","925c38":"🤚🏾","e0ac36":"👋","e1c0a3":"👋🏻","cba380":"👋🏼","a87c5e":"👏🏽","503e36":"👋🏿","deac38":"👏","ddbc9e":"👏🏻","caa583":"👏🏼","86583a":"👏🏾","503f37":"👏🏿","bf8d2a":"✍","c7a182":"✍🏻","b48b6a":"✍🏼","865e45":"✍🏽","72482d":"✍🏾","eeb330":"👐","f0c9a8":"👐🏻","d8a982":"👐🏼","af7d5d":"👐🏽","deaa34":"🙌","dfbea1":"🙌🏻","c9a17e":"🙌🏼","a67a5d":"🙌🏽","4f3e36":"🙌🏿","ba9b4c":"🙏","beaea5":"🙏🏻","ae9c8f":"🙏🏼","8f7971":"🙏🏽","735c54":"🙏🏾","efbb32":"🤝🏿","da996b":"💅","d89ca6":"💅🏻","cc8d94":"💅🏼","b6747f":"💅🏽","a25f69":"💅🏾","804f67":"💅🏿","f4be38":"👂","f0c8a6":"👂🏻","d9ac85":"👂🏼","8d5734":"👂🏾","4d3931":"👂🏿","f5c335":"👃","b3805f":"👃🏽","c7c1b8":"👀","8f7e72":"👁","75777a":"👁‍🗨","b65f6e":"👅","af4c62":"👄","ca2425":"💋","c053a8":"💘","e93da2":"💓","df392f":"💔","e841a2":"💕","ea5794":"💖","db569c":"💗","2175f5":"💙","49c63d":"💚","f8c54d":"💛","b851f3":"💜","e88267":"💝","e442a1":"💞","b97acb":"💟","ddbaba":"💌","0851c0":"💤","d40909":"💢","5a5b57":"💣","ea6f46":"💥","51bff1":"💦","b8cadd":"💨","f8d061":"💫","dedede":"❕","dbdcdd":"🗯","e4e4e5":"💭","6c7773":"👓","8ba8c5":"👔","6fa4d3":"👕","5166a3":"👖","35bfb1":"👗","db972c":"👘","c76575":"👙","e799cd":"👚","de8daf":"👛","a97b5f":"👜","aa8258":"👝","eb8593":"🛍","c1342e":"🎒","a8a6a4":"👟","a63e32":"👠","c7a788":"👡","c39f72":"👢","b79b32":"👑","a2b26a":"👒","41382b":"🎓","a93e3a":"⛑","8f4c4e":"📿","bb5c58":"💄","a4b0b8":"💍","74c1f6":"💎","b7976e":"🐵","ab8658":"🐒","bfa688":"🐶","ad7e4f":"🐕","b0b1b1":"🐩","c47021":"🦊","dab134":"🐱","c4a991":"🐈","c88526":"🦁","b79e31":"🐯","a67549":"🐅","b18c57":"🐆","917f59":"🐴","625b3b":"🐎","a27f60":"🦌","c191d1":"🦄","c5b7aa":"🐮","93684a":"🐂","4c4242":"🐃","8d8683":"🐄","d6a399":"🐷","deb49c":"🐖","c67e8e":"🐽","b5b0a4":"🐏","b9b7ad":"🐑","937e66":"🐐","a67647":"🐪","ae7b56":"🐫","7a7c79":"🐘","b9b0b7":"🐭","cdc4c4":"🐁","7f756b":"🐀","d7aa9c":"🐹","c0b4b5":"🐰","c6c3c3":"🐇","8a5f2d":"🐿","805a36":"🐻","8e7d78":"🐨","aaabab":"🐼","d8a48b":"🐔","c6ada4":"🐓","e2c373":"🐣","e0b836":"🐤","e9b633":"🐥","869d9e":"🐦","babcaf":"🕊","584e46":"🦅","8c8174":"🦆","8a6f5b":"🦉","7ba552":"🐸","699e5b":"🦎","81943d":"🐍","9fa940":"🐲","8ea655":"🐉","43a6c1":"🐳","92b5c5":"🐋","5db7cc":"🐬","7496b6":"🐟","99bd7e":"🐠","c6a060":"🐡","89999c":"🦈","b14758":"🐙","b9aeae":"🐚","c44a27":"🦀","d96d44":"🦐","b85441":"🦑","2e83aa":"🦋","9e754b":"🐌","8c8b42":"🐛","4a3d39":"🐜","7f4a34":"🐞","4e4c4e":"🕷","a1a1a1":"🕸","9b621b":"🦂","a3843e":"💐","f4a0c4":"🌸","feb9b9":"💮","e2a539":"🏵","b32720":"🌹","c84350":"🌺","b29004":"🌻","e1bc38":"🌼","c17a69":"🌷","72b822":"🌱","39713e":"🌲","5b7e23":"🌳","668d2e":"🌴","5f9b34":"🌵","bdb44a":"🌾","5da42a":"🌿","6dc732":"🍀","ba541c":"🍁","b26417":"🍂","87af56":"🍃","9f3c60":"🍇","bbbd81":"🍈","ca7967":"🍉","d18333":"🍊","c1ae3c":"🍋","ebce7e":"🍌","c7443a":"🍎","80b03d":"🍏","aaac41":"🍐","d97a4b":"🍑","aa5044":"🍒","b84c3b":"🍓","a7aa52":"🥝","c34d22":"🍅","b3aa5d":"🥑","815d76":"🍆","ad7f49":"🥔","a77a29":"🥕","bd4a3e":"🌶","7eaf4e":"🥒","df8575":"🍄","b18542":"🥜","d1a96e":"🍞","ce8823":"🥐","d9a562":"🥖","e0b97c":"🥞","f3b521":"🧀","bc7557":"🍖","a8714a":"🍗","c86a46":"🥓","c98840":"🍔","da733d":"🍟","cf7131":"🍕","d8964d":"🌭","c09e43":"🌮","b2a595":"🌯","93814b":"🥙","ded9d2":"🥚","6a6455":"🍳","8d683a":"🥘","b0b2a1":"🍲","959e63":"🥗","e29480":"🍿","8b6d2b":"🍘","9b9a8e":"🍙","c9c7c3":"🍚","c8ad94":"🍛","d6bca1":"🍜","d3a881":"🍝","be6965":"🍠","bfa080":"🍢","e79884":"🍣","e7965e":"🍤","d9cec6":"🍥","c4b78a":"🍡","dac394":"🍦","c9b4b4":"🍧","cebfa8":"🍨","956c50":"🍩","b7854a":"🍪","d6c8be":"🎂","e3c388":"🍰","be5048":"🍫","bfbdd5":"🍬","aba58e":"🍭","d2a881":"🍮","e3b149":"🍯","d4cdac":"🍼","cfcdc8":"🥛","a49e95":"☕","a2a18f":"🍵","c8c9cc":"🍶","918e63":"🍾","b9807f":"🍷","bebcaa":"🍸","b9955e":"🍹","c39a6b":"🍺","cdaa7c":"🍻","c9b782":"🥂","c4a583":"🥃","bbbfc3":"🍽","8a939c":"🍴","828a92":"🥄","8e9090":"🔪","9f6a47":"🏺","52779f":"🌎","9fd2e5":"🌐","85b1b8":"🗺","83b0dd":"🗾","83886c":"⛰","9e8069":"🌋","717a89":"🗻","876e31":"🏕","d7bd86":"🏖","c28035":"🏜","a4bf7d":"🏝","89b9b0":"🏞","a3806f":"🏟","a19a81":"🏛","dab379":"🏗","9c8277":"🏘","81a3c4":"🏙","b09576":"🏚","ae927a":"🏠","9a9c69":"🏡","909ba0":"🏢","bfab95":"🏣","af9f86":"🏤","a39797":"🏥","a6aa8d":"🏦","c4a28e":"🏨","c693a7":"🏩","8da199":"🏪","bead93":"🏫","ad836f":"🏭","726b6e":"🏯","8d8179":"🏰","c082a2":"💒","9d3930":"🗼","72aaa3":"🗽","b4abae":"⛪","ce9f78":"🕌","b3926b":"🕍","a3371c":"⛩","3f3b34":"🕋","8ca4a4":"⛲","d96839":"⛺","c9d2da":"🌁","597d95":"🌃","9b7e7f":"🌄","ce9e77":"🌅","bc855e":"🌆","d29360":"🌇","726b6b":"🌉","43566a":"🌌","ad9b88":"🎠","9c616f":"🎡","888e4a":"🎢","a180a8":"💈","cd877c":"🎪","846d63":"🎭","aeb85a":"🖼","ba9047":"🎨","b19389":"🎰","8f6055":"🚂","98a26e":"🚃","868f96":"🚄","90989e":"🚅","72889d":"🚆","5a5151":"🚇","56687e":"🚈","5d6668":"🚉","576b6c":"🚊","98a082":"🚞","7b8374":"🚋","9e9c74":"🚌","5f87a0":"🚎","8c9998":"🚐","a59398":"🚑","b44f50":"🚒","707b7d":"🚓","8e845e":"🚖","af4c4b":"🚗","98575b":"🚘","4788a4":"🚙","b67337":"🚚","4b7e50":"🚛","7a7333":"🚜","a28747":"🛵","9f9aa2":"🚏","6b6841":"🛤","b34f54":"⛽","da695d":"🚨","69644f":"🚥","68624e":"🚦","9b8435":"🚧","e2502f":"🛑","78797d":"⚓","b86938":"⛵","4c6427":"🛶","b79954":"🚤","b7b0b3":"🛳","8490ad":"⛴","98a9b2":"🛥","af837c":"🚢","a2aab3":"🛩","6882a0":"🛫","6581a1":"🛬","747d98":"💺","a97476":"🚁","6c5c60":"🚠","8a804e":"🚡","9f6e59":"🚀","58627c":"🛰","9d7f37":"🛎","965c3c":"🚪","978a88":"🛌","93837e":"🛏","8daed0":"🛋","d5d4d3":"🚽","68a1a7":"🚿","c1c4b8":"🛀","c1c5bb":"🛀🏻","c0c4ba":"🛀🏼","c0c3b9":"🛀🏽","bec2b8":"🛀🏾","bcc1b8":"🛀🏿","c5cbcd":"🛁","ab998e":"⌛","a59386":"⏳","4b4b4a":"⌚","cf9d9e":"⏰","c1c1c4":"⏱","c7c6c5":"⏲","a28571":"🕰","cfd1d2":"🕛","ced0d1":"🕦","cecfd1":"🕚","d0d1d2":"🕡","cfd0d1":"🕢","2f3d53":"🌑","56584e":"🌒","8f8652":"🌓","c4b349":"🌔","f5d532":"🌕","c8b342":"🌖","8e824d":"🌗","f6d456":"🌙","4e5466":"🌚","eccc52":"🌜","d3a7ad":"🌡","efd365":"🌝","f2b537":"🌞","f6d87d":"⭐","f9db77":"🌟","869e91":"🌠","e6e3d5":"⛅","d5e2df":"⛈","ead28f":"🌤","e3e2d9":"🌥","dad8c0":"🌦","cfe1eb":"🌧","d3e1ed":"🌨","eaebe4":"🌩","a4a7b1":"🌪","d7d8dd":"🌫","d2d8e0":"🌬","0056e3":"🌀","a9805c":"🌈","64468d":"🌂","7b7dda":"☔","ce8c5c":"⛱","f9bd38":"⚡","9ca3a6":"⛄","fb8c40":"🔥","52bef0":"💧","85acc3":"🌊","d4870b":"🎃","5c834c":"🎄","775e7f":"🎆","9a7255":"🎇","fbc74d":"✨","e24c52":"🎈","b3856a":"🎉","ce9583":"🎊","9f9952":"🎍","7d5f66":"🎎","a78e75":"🎏","c9d2dd":"🎐","858a8c":"🎑","da7296":"🎀","c76524":"🎁","eeb917":"🎗","e46b78":"🎟","c8c166":"🎫","d88847":"🎖","bd861d":"🏆","c89b58":"🏅","dfaa36":"🥇","a398a0":"🥈","a2552d":"🥉","b0b0b0":"⚽","c8b9b4":"⚾","c66d37":"🏀","bcbcbc":"🏐","bb7b5b":"🏈","cb954a":"🏉","c3d733":"🎾","5a5a5a":"🎱","978f8c":"🎳","c17835":"🏏","9b8960":"🏑","b08b7c":"🏒","e56550":"🏓","baa880":"🏸","b94546":"🥊","c0bdbb":"🥋","8b4443":"🥅","b06c6d":"🎯","a6a5a6":"⛸","5a718d":"🎣","119ed0":"🎽","6e9474":"🎿","504f49":"🎮","b6b5b5":"🎲","c8bfb6":"🃏","c5a795":"🀄","845c59":"🎴","75797d":"🔈","7c8387":"🔉","aeb0b1":"📢","a18531":"📣","cc9455":"📯","a88934":"🔔","b26829":"🔕","6f6f6f":"🎼","3f4145":"🎵","53585e":"🎶","7a8086":"🎙","8c9093":"🎚","8e9396":"🎛","c4c5c6":"🎧","9a8a62":"📻","b39740":"🎷","cd6b66":"🎸","8d8d8e":"🎹","a99546":"🎺","bf8876":"🥁","454b48":"📱","3c505b":"📲","585a5b":"📞","437d5a":"📟","a9a59b":"📠","6ea254":"🔋","48463d":"🔌","eff1f2":"🖱","a39c87":"💽","9a9da0":"💾","cacac8":"💿","cabd94":"📀","b09f80":"🎞","686c6c":"📽","7b746c":"📺","696a6a":"📷","7a6d58":"📸","5c5c5b":"📼","afb2b5":"🔍","b2b4b8":"🔎","838f95":"🔬","afadac":"🔭","aaadb2":"📡","d3c1b0":"🕯","f0e4be":"💡","7c7e7f":"🔦","af4319":"🏮","d5b571":"📔","a93b37":"📕","abb9c3":"📖","759a40":"📗","3975a3":"📘","c07f20":"📙","87886e":"📚","d7bf38":"📒","cdcdcd":"📄","b69673":"📜","a5a5a5":"📰","cfd0d2":"📑","e2ccc4":"🔖","f5ce9f":"🏷","ac8f4e":"💰","a2a291":"💴","beb68d":"💵","a6c0ad":"💶","b29ea1":"💷","bab59c":"💸","b4b091":"💳","38c43d":"💹","4e4e4e":"➿","4b4b4b":"🔝","cad2da":"📧","b9c2c9":"📨","dfcecd":"📩","9faac7":"📤","9da8c5":"📥","a57e5a":"📦","5b819c":"📫","5f8aa4":"📪","6c7785":"📬","5c6c79":"📭","d24646":"📮","81b2ba":"🗳","7b7f83":"🖋","6b6f73":"🖊","6e7193":"🖌","bf4242":"🖍","dad1bf":"📝","7b5f4e":"💼","9ea6ad":"📁","9ca6af":"📂","dbb28a":"🗂","bda1a0":"📅","b59b9b":"📆","d4d8dc":"🗒","cfbfc0":"🗓","9b9993":"📇","cfc6ce":"📈","becedf":"📉","90acad":"📊","cac2b6":"📋","bf4649":"📌","c45956":"📍","97a5b4":"📎","a0a7ae":"🖇","a8b9cc":"📏","a7b8ca":"📐","68635b":"🗃","72787a":"🗄","8d949c":"🗑","aca97d":"🔒","aeac82":"🔓","7d7f6e":"🔏","bca761":"🔐","dab02d":"🔑","6d686a":"🗝","5b5e63":"🔨","6a6d73":"🛠","8e9299":"🗡","7edc66":"🔫","a89890":"🏹","bc9791":"🛡","76777f":"🔧","94979d":"🔩","717e86":"🗜","91969d":"🔗","8d9196":"⛓","aab6bd":"💉","d6913c":"💊","ada398":"🚬","984e4e":"🛢","a6649d":"🔮","7c797a":"🛒","3774b5":"🏧","89a3ba":"🆕","94a7b2":"🚰","3d8ee3":"♿","2783e2":"🚹","ac5ec2":"🚺","94abc0":"🔄","fbb241":"🚼","3e8ee3":"🚾","3188e2":"🛂","358ae3":"🛃","4c97e5":"🛄","3e8fe3":"🛅","bc9e19":"🚸","e77b64":"⛔","dc5237":"🚫","a1503e":"🚳","a3513f":"🚭","a75445":"🚯","aa5947":"🚱","a95441":"🚷","9a4b3a":"📵","ae5b4a":"🔞","92aabf":"📶","4c4c4c":"🔚","4a4a4a":"➰","a958bf":"🛐","af66c4":"♐","b36ec6":"🕎","ad60c2":"♈","ad61c2":"♒","ae64c3":"♋","b067c4":"♎","b26bc6":"♍","af65c4":"♏","b066c4":"♑","ae61c3":"♓","b470c7":"⛎","90a8be":"⏬","92a9bf":"🔁","93aabf":"⏮","96adc1":"⏯","8fa8be":"🔼","91a9be":"🆖","8ea7bd":"🔽","8ca5bc":"🆙","9cb1c4":"⏹","95acc1":"⏺","a0b4c6":"🎦","f9b925":"🔅","f9b423":"🔆","faad32":"📳","f9b241":"📴","e77e6b":"📛","779b45":"🔰","ca9c20":"🔱","e70706":"⭕","2ec233":"✅","e60606":"❌","36c43b":"❎","d70a0a":"❓","e3e3e3":"❔","d90707":"❗","8aa4bb":"#️⃣","8ba4bb":"*️⃣","819db6":"1️⃣","85a0b8":"🔤","86a1b8":"3️⃣","87a1b9":"5️⃣","829db6":"7️⃣","8aa3ba":"🆓","da0804":"💯","8ca5bb":"🔠","89a2ba":"🔡","87a2b9":"🔢","e95c4e":"🆎","e85243":"🆑","ba7bcb":"🆔","8fa8bd":"🆗","e85344":"🆘","fab03b":"🆚","8da6bc":"🈁","fab140":"🈸","46c74a":"🈯","f54d49":"🉐","e86457":"🈹","f9b347":"🈚","e86b5f":"🈲","faa73a":"🉑","e95f51":"🈴","4090e3":"🈳","f9b346":"🈺","e96a5e":"🈵","d9d9d9":"⬜","1e1e1e":"⬛","fa9e10":"🔸","116fc6":"🔷","1170c6":"🔹","e51c08":"🔺","f13f2c":"🔻","84bfe0":"💠","7d7d7d":"🔲","7c7c7c":"🔳","dfdfdf":"⚪","1e1e1d":"⚫","d22b2a":"🔴","1965cc":"🔵","7a7b7b":"🏁","ab2626":"🚩","d1babb":"🎌","cccdcd":"🏳","46517b":"🇹🇦","a1674d":"🇦🇩","7b6355":"🇦🇪","514b22":"🇦🇫","83444b":"🇦🇬","5a396a":"🇦🇮","9e2d32":"🇦🇱","963f4b":"🇦🇲","769ac4":"🇦🇶","9bb4ca":"🇦🇷","d87673":"🇦🇹","4d4d80":"🇭🇲","6a839f":"🇦🇼","68686a":"🇦🇽","5f6d77":"🇦🇿","675d6d":"🇧🇦","515a61":"🇧🇧","51634b":"🇧🇩","a05e30":"🇧🇪","796a45":"🇧🇫","8c8c7b":"🇧🇬","c6606a":"🇧🇭","8c7841":"🇧🇯","cec9c4":"🇧🇱","ac3c40":"🇧🇲","b5a04e":"🇧🇳","8f7339":"🇧🇴","7a859d":"🇧🇶","42995f":"🇧🇷","d28858":"🇧🇹","b4555a":"🇸🇯","6c89a5":"🇧🇼","8e4523":"🇧🇾","505f7a":"🇧🇿","e16262":"🇨🇦","5c828d":"🇨🇩","8d8663":"🇨🇫","9f8e4e":"🇨🇬","db4242":"🇨🇭","9ea878":"🇮🇪","b7797f":"🇨🇱","bc2b35":"🇨🇳","a17747":"🇨🇴","9f8496":"🇲🇫","996f89":"🇨🇷","7f6891":"🇨🇺","4d5c8d":"🇨🇻","3d556f":"🇨🇼","dcd6ce":"🇨🇾","a47683":"🇨🇿","a24c19":"🇩🇪","8887a1":"🇮🇴","6daf97":"🇩🇯","bf4f64":"🇩🇰","4e8350":"🇩🇲","8e687e":"🇩🇴","86a388":"🇩🇿","b66c26":"🇪🇸","9e7745":"🇪🇨","67778c":"🇪🇪","9a6d6f":"🇪🇬","67665a":"🇪🇭","885f61":"🇪🇷","24478c":"🇪🇺","8d9db2":"🇫🇮","558aa5":"🇫🇯","4d5883":"🇫🇰","79a7c5":"🇫🇲","b0a6b6":"🇫🇴","9e6079":"🇬🇧","907a41":"🇬🇩","da929a":"🇬🇪","80a22e":"🇬🇫","daaea7":"🇬🇬","8f7337":"🇬🇭","cb8182":"🇬🇮","ce8190":"🇬🇱","a2874c":"🇬🇳","3b4238":"🇬🇵","90856b":"🇬🇶","7070a5":"🇬🇷","464e79":"🇬🇸","9cbeca":"🇬🇹","3c5a8b":"🇬🇺","8d7b3a":"🇬🇼","7f9158":"🇬🇾","be3847":"🇭🇰","6082bd":"🇭🇳","94677e":"🇭🇷","6e316d":"🇭🇹","978d7e":"🇭🇺","9fab87":"🇮🇨","d47d7d":"🇮🇩","9ba8c8":"🇮🇱","b83646":"🇮🇲","a3a775":"🇮🇳","a78b76":"🇮🇷","5d5e8d":"🇮🇸","94907f":"🇮🇹","d9b2b5":"🇯🇪","858e22":"🇯🇲","6f5d55":"🇯🇴","d7bdc3":"🇯🇵","6a4736":"🇰🇪","d13937":"🇰🇬","7e2d5d":"🇰🇭","ad6e75":"🇰🇮","615b39":"🇰🇳","a6596e":"🇰🇵","bab0b5":"🇰🇷","877a74":"🇰🇼","32a5a4":"🇰🇿","6b4363":"🇱🇦","cf9b8c":"🇱🇧","70b3c4":"🇱🇨","ac6e46":"🇱🇰","bc6f7f":"🇱🇷","648c97":"🇱🇸","876e3c":"🇱🇹","9990a0":"🇱🇺","944e55":"🇱🇻","c01e27":"🇲🇦","cc868e":"🇲🇨","905d49":"🇲🇩","b32f24":"🇲🇪","9b8a75":"🇲🇬","4f648d":"🇲🇭","c56033":"🇲🇰","af8f44":"🇲🇲","2d7867":"🇲🇴","3d7ba4":"🇲🇵","6b7da5":"🇲🇶","4d396a":"🇲🇸","cc7f89":"🇲🇹","7c4c46":"🇲🇻","8e7977":"🇲🇽","a9787d":"🇲🇾","736e3d":"🇲🇿","6e754e":"🇳🇨","aca67a":"🇳🇪","6b9f7f":"🇳🇫","60a489":"🇳🇬","89a4d9":"🇳🇮","8e445c":"🇳🇵","304a7a":"🇳🇷","c9a83e":"🇳🇺","442d69":"🇳🇿","b07d6a":"🇴🇲","a38faa":"🇵🇦","cd717a":"🇵🇪","c88087":"🇵🇫","7c3830":"🇵🇬","885c7c":"🇵🇭","588f58":"🇵🇰","d69690":"🇵🇱","6b8d8a":"🇵🇲","995b75":"🇵🇷","97421e":"🇵🇹","45afa4":"🇵🇼","8f7092":"🇵🇾","9c6575":"🇶🇦","62309b":"🇷🇪","a47684":"🇷🇸","8c728f":"🇷🇺","28734e":"🇸🇦","44746b":"🇸🇧","78605c":"🇸🇩","5a7f6f":"🇸🇪","da9397":"🇸🇬","966a8b":"🇸🇰","62a79d":"🇸🇱","74a3bc":"🇸🇲","5087c7":"🇸🇴","9d6b63":"🇸🇷","4d5355":"🇸🇸","76942f":"🇸🇹","5f6dac":"🇸🇻","85476c":"🇸🇽","875c52":"🇸🇿","3b4a90":"🇹🇫","807a42":"🇹🇬","976e87":"🇹🇭","b79c82":"🇹🇯","525d6a":"🇹🇰","b54e3e":"🇹🇱","d02e3b":"🇹🇳","bb4646":"🇹🇴","d3474f":"🇹🇷","9b3742":"🇹🇹","7a7e8e":"🇹🇻","af436a":"🇹🇼","909e6e":"🇺🇦","996a21":"🇺🇬","ae788b":"🇺🇸","99a1b9":"🇺🇾","6daf98":"🇺🇿","d4c683":"🇻🇦","79a167":"🇻🇨","8b6456":"🇻🇪","4b3364":"🇻🇬","b6b69d":"🇻🇮","bf3934":"🇻🇳","ca4c5c":"🇼🇫","ae3e50":"🇼🇸","495f92":"🇽🇰","cdc6c8":"🇾🇹","5e6c65":"🇿🇦","44741a":"🇿🇲","997c36":"🇿🇼"}}'
);

module.exports = { mappedEmojis };