$(function()
{

	const officialPhotos = [
		{
			width: 2,
			orientation: 'landscape',
			name: '6',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '5',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '1',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '2',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '3',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '4',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '7',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '8',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '9',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '10',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '11',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '12',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '13',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '14',
		},
		{
			width: 2,
			orientation: 'portrait',
			name: '15',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '16',
		},
		{
			width: 1,
			orientation: 'portrait',
			name: '18',
		},
		{
			width: 2,
			orientation: 'portrait',
			name: '17',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '19',
		},
		{
			width: 2,
			orientation: 'portrait',
			name: '20',
		},
		{
			width: 2,
			orientation: 'portrait',
			name: '21',
		},
		// {
		// 	width: 4,
		// 	orientation: 'portrait',
		// 	name: '22',
		// },
		{
			width: 4,
			orientation: 'portrait',
			name: '23',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '24',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '25',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '26',
		},
		{
			width: 1,
			orientation: 'landscape',
			name: '27',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '28',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '29',
		},
		{
			width: 1,
			orientation: 'landscape',
			name: '30',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '31',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '32',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '33',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '34',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '45',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '46',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '47',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '48',
		},
		{
			width: 1,
			orientation: 'landscape',
			name: '49',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '50',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '51',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '52',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '53',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '54',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '55',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '58',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '59',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '56',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '57',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '60',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '61',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '40',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '41',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '42',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '43',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '35',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '36',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '37',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '38',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '39',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '44',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '62',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '63',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '64',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '65',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '66',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '67',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '68',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '69',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '70',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '71',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '72',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '73',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '74',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '75',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '76',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '77',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '78',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '79',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '80',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '81',
		},
		{
			width: 1,
			orientation: 'landscape',
			name: '82',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '83',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '84',
		},
		{
			width: 4,
			orientation: 'portrait',
			name: '85',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '86',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '87',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '88',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '89',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '90',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '91',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '92',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '93',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '94',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '95',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '96',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '97',
		},
		{
			width: 4,
			orientation: 'landscape',
			name: '98',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '100',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '101',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '102',
		},
		{
			width: 2,
			orientation: 'landscape',
			name: '103',
		},
		{
			width: 1,
			orientation: 'landscape',
			name: '104',
		}
	];

	const famfndsPhotos = [
		{
			orientation: 'portrait',
			name: 'f1',
			type: 'image',
		},
		{
			orientation: 'portrait',
			name: 'f2',
			type: 'image',
		},
		{
			orientation: 'landscape',
			name: 'f3',
			type: 'image',
		},
		{
			orientation: 'portrait',
			name: 'f4',
			type: 'image',
		},
		{
			orientation: 'portrait',
			name: 'f5',
			type: 'image',
		},
		{
			orientation: 'portrait',
			name: 'f6',
			type: 'image',
		},
		{
			orientation: 'portrait',
			name: 'f7',
			type: 'image',
		},
		{
			orientation: 'portrait',
			name: 'f8',
			type: 'image',
		},
		{
			orientation: 'portrait',
			name: 'f9',
			type: 'image',
		},
		{
			orientation: 'landscape',
			name: 'f10',
			type: 'image',
		},
		{
			orientation: 'portrait',
			name: 'f11',
			type: 'image',
		},
		{
			orientation: 'portrait',
			name: 'f12',
			type: 'image',
		},
		{
			orientation: 'portrait',
			name: 'f13',
			type: 'video',
		},
		{
			orientation: 'portrait',
			name: 'f14',
			type: 'video',
		},
	];

	const collabPhotos = [
		{
			orientation: 'landscape',
			name: '23l1fx1lyf',
		},
		{
			orientation: 'landscape',
			name: 'cmx1mb1wq8',
		},
		{
			orientation: 'landscape',
			name: 'cnx6b3rcst',
		},
		{
			orientation: 'landscape',
			name: 'np5wa7ldiq',
		},
		{
			orientation: 'landscape',
			name: 'b4frvof995f',
		},
		{
			orientation: 'portrait',
			name: '0b18b3qgl3k',
		},
		{
			orientation: 'landscape',
			name: '2o5b5yr9jhg',
		},
		{
			orientation: 'portrait',
			name: '316di31inbh',
		},
		{
			orientation: 'portrait',
			name: 'vdtrgvk1ix',
		},
		{
			orientation: 'portrait',
			name: 'yqw8pualqli',
		},
		{
			orientation: 'portrait',
			name: 'ozqbpz0ych',
		},
		{
			orientation: 'portrait',
			name: '09zdtztxbi',
		},
		{
			orientation: 'portrait',
			name: '49brzt8p2wf',
		},
		{
			orientation: 'portrait',
			name: 'ry4ta0of64g',
		},
		{
			orientation: 'portrait',
			name: 'pyu2mfjchx',
		},
		{
			orientation: 'portrait',
			name: 'ps0be0kqq8',
		},
		{
			orientation: 'portrait',
			name: '3awtmw556e',
		},
		{
			orientation: 'portrait',
			name: 'xc1vt6xgar',
		},
		{
			orientation: 'portrait',
			name: 'v7r3ez6ob',
		},
		{
			orientation: 'portrait',
			name: 'ti2vxfd17ag',
		},
		{
			orientation: 'portrait',
			name: 'kaovzsuxxf',
		},
		{
			orientation: 'portrait',
			name: 'kxe21mmcvil',
		},
		{
			orientation: 'landscape',
			name: 'ahyq5plkue',
		},
		{
			orientation: 'landscape',
			name: 'qwoaxx2kqw',
		},
		{
			orientation: 'portrait',
			name: '23fn6zwquki',
		},
		{
			orientation: 'landscape',
			name: 'mr42zjb4yek',
		},
		{
			orientation: 'landscape',
			name: '4dlqz4nd7ij',
		},
		{
			orientation: 'landscape',
			name: 'rbleug6gb1',
		},
		{
			orientation: 'portrait',
			name: '299johbqe6',
		},
		{
			orientation: 'portrait',
			name: 'oriuso63xf',
		},
		{
			orientation: 'portrait',
			name: 'e6bsug20t8',
		},
		{
			orientation: 'portrait',
			name: 'iek505z4he',
		},
		{
			orientation: 'portrait',
			name: 'q5gjgyshqz',
		},
		{
			orientation: 'portrait',
			name: 'q2nc3yhqjg',
		},
		{
			orientation: 'portrait',
			name: '6ml2okqd56k',
		},
		{
			orientation: 'portrait',
			name: 'mixku0u29yf',
		},
		{
			orientation: 'portrait',
			name: 'wqem7et777',
		},
		{
			orientation: 'portrait',
			name: 'llp4ovnyfb',
		},
		{
			orientation: 'portrait',
			name: '7h5enij5xn',
		},
		{
			orientation: 'portrait',
			name: 'q2voenfrhk',
		},
		{
			orientation: 'portrait',
			name: '6hmb1v4y6k',
		},
		{
			orientation: 'portrait',
			name: 'ol9ocqeqde',
		},
		{
			orientation: 'portrait',
			name: '253bfw0lvp',
		},
		{
			orientation: 'portrait',
			name: 'bi2a6matzf',
		},
		{
			orientation: 'portrait',
			name: '2c3ilr92bx',
		},
		{
			orientation: 'portrait',
			name: 'txt3mutvon',
		},
		{
			orientation: 'portrait',
			name: 'zn7mixefsw',
		},
		{
			orientation: 'portrait',
			name: 'aqblwgx59rk',
		},
		{
			orientation: 'portrait',
			name: 'c8iasjgvwz',
		},
		{
			orientation: 'portrait',
			name: 'ci72ufuqdp',
		},
		{
			orientation: 'portrait',
			name: 'ggrl1d74x6',
		},
		{
			orientation: 'portrait',
			name: 'n6wezd0nio',
		},
		{
			orientation: 'portrait',
			name: '2enqh67uj',
		},
		{
			orientation: 'portrait',
			name: 'dp3tqcyt2j',
		},
		{
			orientation: 'portrait',
			name: 'akqovi876u',
		},
		{
			orientation: 'portrait',
			name: 'n82xsx1o9zh',
		},
		{
			orientation: 'portrait',
			name: 'yq9odsaaz5',
		},
		{
			orientation: 'portrait',
			name: 'pkjk6n2tvij',
		},
		{
			orientation: 'portrait',
			name: 'vumvswyomz',
		},
		{
			orientation: 'portrait',
			name: '6c759fmlxz',
		},
		{
			orientation: 'portrait',
			name: 'tt8531akr0i',
		},
		{
			orientation: 'portrait',
			name: 'fzum2vcnrk',
		},
		{
			orientation: 'portrait',
			name: '5f3cgnvzpv',
		},
		{
			orientation: 'portrait',
			name: 'v67ccjor64',
		},
		{
			orientation: 'portrait',
			name: '38qdz7rgnv',
		},
		{
			orientation: 'portrait',
			name: 'q22kqh1v9dl',
		},
		{
			orientation: 'portrait',
			name: 'flon45rpwok',
		},
		{
			orientation: 'portrait',
			name: 'f0e5re8k7g',
		},
		{
			orientation: 'portrait',
			name: 't99tc99m3wh',
		},
		{
			orientation: 'portrait',
			name: 'kh7m0wrxhc',
		},
		{
			orientation: 'portrait',
			name: 'vdwq4s0ir2',
		},
		{
			orientation: 'portrait',
			name: 'yb7p6u1w53i',
		},
		{
			orientation: 'portrait',
			name: 'v8o2fb80bz',
		},
		{
			orientation: 'portrait',
			name: 'i8136ql1mp',
		},
		{
			orientation: 'portrait',
			name: 'xre0tn5tm0l',
		},
		{
			orientation: 'portrait',
			name: '5rnboq1p5s',
		},
		{
			orientation: 'portrait',
			name: 'x545zdm3n7',
		},
		{
			orientation: 'portrait',
			name: 'citwwq8rnr',
		},
		{
			orientation: 'portrait',
			name: 'b8yef7a7xof',
		},
		{
			orientation: 'portrait',
			name: 'rawb1wyghl',
		},
		{
			orientation: 'portrait',
			name: '8vc5b51c4k',
		},
		{
			orientation: 'portrait',
			name: '07wqdl360df',
		},
		{
			orientation: 'portrait',
			name: 'lq8okgs89l',
		},
		{
			orientation: 'portrait',
			name: 'guvnvlt1ww',
		},
		{
			orientation: 'portrait',
			name: 'kv5c0timej',
		},
		{
			orientation: 'portrait',
			name: 'xflu3xucgz',
		},
		{
			orientation: 'portrait',
			name: 'z7ki2a13q0g',
		},
		{
			orientation: 'portrait',
			name: '2feafwd9ar',
		},
		{
			orientation: 'portrait',
			name: 'vh23assh7i',
		},
		{
			orientation: 'portrait',
			name: 'toqwizkrzx',
		},
		{
			orientation: 'portrait',
			name: 'wr5qrs2nif',
		},
		{
			orientation: 'portrait',
			name: 'ccr6z37q83',
		},
		{
			orientation: 'portrait',
			name: 'hbzf1xq1jwj',
		},
		{
			orientation: 'portrait',
			name: 'muu4fiygkv',
		},
		{
			orientation: 'portrait',
			name: 'pdh5p1cde7',
		},
		{
			orientation: 'portrait',
			name: '03e662v9pog',
		},
		{
			orientation: 'portrait',
			name: 'uk7w48fuos',
		},
		{
			orientation: 'portrait',
			name: 'ztzocr5m82',
		},
		{
			orientation: 'portrait',
			name: 'gddhnyawpu',
		},
		{
			orientation: 'portrait',
			name: 'mwr095asbu',
		},
		{
			orientation: 'portrait',
			name: 'o2d13bsm7l',
		},
		{
			orientation: 'portrait',
			name: 'hrxg1w8v24g',
		},
		{
			orientation: 'portrait',
			name: '7l9nsmtdry',
		},
		{
			orientation: 'portrait',
			name: 'j00qxwvj6u',
		},
		{
			orientation: 'portrait',
			name: 'gz4y1r8s86',
		},
		{
			orientation: 'portrait',
			name: '2rpnht7okv',
		},
		{
			orientation: 'portrait',
			name: 'at7kl1i6a1',
		},
		{
			orientation: 'portrait',
			name: 'ixwj1uuojn',
		},
		{
			orientation: 'portrait',
			name: '0h157mtd0k',
		},
		{
			orientation: 'portrait',
			name: '11h0cp2tq9',
		},
		{
			orientation: 'portrait',
			name: 'dgtbgrzvit',
		},
		{
			orientation: 'portrait',
			name: 'lxjp88avb3',
		},
		{
			orientation: 'portrait',
			name: '8oqk0zt8jn',
		},
		{
			orientation: 'portrait',
			name: 'iayyc35oao',
		},
		{
			orientation: 'portrait',
			name: 'tws0qqhztc',
		},
		{
			orientation: 'portrait',
			name: 'tegsexly78',
		},
		{
			orientation: 'portrait',
			name: '8save97wjh',
		},
		{
			orientation: 'portrait',
			name: '25zbbegirfl',
		},
		{
			orientation: 'portrait',
			name: 'hj9dfkko84',
		},
		{
			orientation: 'portrait',
			name: 'pvv3j6b9qg',
		},
		{
			orientation: 'portrait',
			name: 'ggfa2cv64z',
		},
		{
			orientation: 'portrait',
			name: 'x7mhqo5mlb',
		},
		{
			orientation: 'portrait',
			name: 'cd03zvgx6k',
		},
		{
			orientation: 'portrait',
			name: 'czqqldg9jgi',
		},
		{
			orientation: 'portrait',
			name: 'nhqn7na51p',
		},
		{
			orientation: 'portrait',
			name: 'c7d2l8vxhp',
		},
		{
			orientation: 'portrait',
			name: 'kxt7de001w',
		},
		{
			orientation: 'portrait',
			name: '6sdacsg3hgl',
		},
		{
			orientation: 'portrait',
			name: '560yhnbrrk',
		},
		{
			orientation: 'portrait',
			name: '6i896gvb7',
		},
		{
			orientation: 'portrait',
			name: 's6b17lrnwf',
		},
		{
			orientation: 'portrait',
			name: 'uyz3iweu5d',
		},
		{
			orientation: 'portrait',
			name: '0j3fvi6e52',
		},
		{
			orientation: 'portrait',
			name: 'gccrkgoiqtf',
		},
		{
			orientation: 'portrait',
			name: 'blrg6rebc9f',
		},
		{
			orientation: 'portrait',
			name: 'zobqhpumhh',
		},
		{
			orientation: 'landscape',
			name: '608uhd0cxi',
		},
		{
			orientation: 'landscape',
			name: 'tgwskkv9to',
		},
		{
			orientation: 'landscape',
			name: 't80kbzob1r',
		},
		{
			orientation: 'landscape',
			name: 'mz9ph4bd6n',
		},
		{
			orientation: 'landscape',
			name: 'ps82h2uvzn',
		},
		{
			orientation: 'landscape',
			name: 'yvv6nd8foz',
		},
		{
			orientation: 'landscape',
			name: 'hf0r5rq2bf',
		},
		{
			orientation: 'landscape',
			name: 'upt1s1zls8',
		},
		{
			orientation: 'portrait',
			name: 'ql4u34tnvj',
		},
		{
			orientation: 'portrait',
			name: 'jkyl29qm3m',
		},
		{
			orientation: 'portrait',
			name: '4y8ud3xjb3',
		},
		{
			orientation: 'portrait',
			name: '9i7et5yblb',
		},
		{
			orientation: 'portrait',
			name: 'n92ogpfc2a',
		},
		{
			orientation: 'portrait',
			name: 'x5autk1xzv',
		},
		{
			orientation: 'portrait',
			name: 'u0k2o4m9t1',
		},
		{
			orientation: 'portrait',
			name: 'ifbev4ih42',
		},
		{
			orientation: 'portrait',
			name: '8eqniw1gv3',
		},
		{
			orientation: 'portrait',
			name: 'uth5cll9z8',
		},
		{
			orientation: 'portrait',
			name: '2ktw9tm5qx',
		},
		{
			orientation: 'portrait',
			name: 'upawgtv6n3',
		},
		{
			orientation: 'portrait',
			name: 'z2inwbbq23',
		},
		{
			orientation: 'portrait',
			name: 'w7pvy62gzu',
		},
		{
			orientation: 'portrait',
			name: 'e9t557b4pd',
		},
		{
			orientation: 'portrait',
			name: 'qpko5yfxuoj',
		},
		{
			orientation: 'portrait',
			name: 'd4f9f1xwyw',
		},
		{
			orientation: 'portrait',
			name: 'fcxfbjhhyp',
		},
		{
			orientation: 'portrait',
			name: 'c95t547w86',
		},
		{
			orientation: 'portrait',
			name: 'z277n8q3gp',
		},
		{
			orientation: 'landscape',
			name: '8onadpz3ki',
		},
		{
			orientation: 'landscape',
			name: 'qf8be0aqry',
		},
		{
			orientation: 'portrait',
			name: 'pr20hu9vwi',
		},
		{
			orientation: 'portrait',
			name: 'nehsqf3jxe',
		},
		{
			orientation: 'portrait',
			name: 'as4b87p0te',
		},
		{
			orientation: 'portrait',
			name: '2om7e82j6r',
		},
		{
			orientation: 'portrait',
			name: '578fp9kheqj',
		},
		{
			orientation: 'portrait',
			name: 'tbztwbx75rl',
		},
		{
			orientation: 'portrait',
			name: 'a7sc01gr9h',
		},
		{
			orientation: 'landscape',
			name: 'o4hsjyne7c',
		},
		{
			orientation: 'portrait',
			name: 'fi9c9wbwza',
		},
		{
			orientation: 'portrait',
			name: 'f0oyh5sz9e',
		},
		{
			orientation: 'portrait',
			name: '8nhbx3u8xj',
		},
		{
			orientation: 'landscape',
			name: 'pdjr0cojjg',
		},
		{
			orientation: 'portrait',
			name: 'afidoiwsy4',
		},
		{
			orientation: 'portrait',
			name: 'q16csglu1r',
		},
		{
			orientation: 'portrait',
			name: 'd87dwrl0cn',
		},
		{
			orientation: 'portrait',
			name: 'i1j6dbw2kx',
		},
		{
			orientation: 'portrait',
			name: 'fqkjmk8rtc',
		},
		{
			orientation: 'portrait',
			name: '59048cm3i0f',
		},
		{
			orientation: 'portrait',
			name: 'xq2lp1prq6f',
		},
		{
			orientation: 'portrait',
			name: 'o1s2g2khq8l',
		},
		{
			orientation: 'portrait',
			name: 'w4m5o4ouwe',
		},
		{
			orientation: 'portrait',
			name: 'bw5gs5da3fg',
		},
		{
			orientation: 'portrait',
			name: 'knz06qwgzl',
		},
		{
			orientation: 'portrait',
			name: 'p88wcw0ioh',
		},
		{
			orientation: 'portrait',
			name: 'd9clzmraqo',
		},
		{
			orientation: 'portrait',
			name: '61h1h4d9rth',
		},
		{
			orientation: 'portrait',
			name: '4hi0r4zpyg',
		},
		{
			orientation: 'portrait',
			name: '0idxpwradw',
		},
		{
			orientation: 'portrait',
			name: 'yrupni3sg3',
		},
		{
			orientation: 'landscape',
			name: 'ztfov7tbrp',
		},
		{
			orientation: 'portrait',
			name: 'ojo32p8naf',
		},
		{
			orientation: 'portrait',
			name: '74j5e3ytiv',
		},
		{
			orientation: 'portrait',
			name: 'h4mlrn822g',
		},
		{
			orientation: 'portrait',
			name: '7wohsu4a4c',
		},
		{
			orientation: 'landscape',
			name: 'e9jfsocc9hg',
		},
		{
			orientation: 'portrait',
			name: '2t6harcbxf',
		},
		{
			orientation: 'portrait',
			name: 'sp987v3261',
		},
		{
			orientation: 'portrait',
			name: 'pmx3xa843r',
		},
		{
			orientation: 'portrait',
			name: 'j1k2s76eprg',
		},
		{
			orientation: 'portrait',
			name: '2q8y1kd9rn',
		},
		{
			orientation: 'portrait',
			name: 'n01ij1ljmy',
		},
		{
			orientation: 'portrait',
			name: '7fzzzpsx9c',
		},
		{
			orientation: 'portrait',
			name: 'r1ay7k1h1d',
		},
		{
			orientation: 'portrait',
			name: '5ue2l8vy46l',
		},
		{
			orientation: 'portrait',
			name: '1xtycgwhe7',
		},
		{
			orientation: 'portrait',
			name: '08whp9ylea',
		},
		{
			orientation: 'portrait',
			name: '5g3tp241et',
		},
		{
			orientation: 'landscape',
			name: '9a22y8rjpk',
		},
		{
			orientation: 'landscape',
			name: '5au2hxjhxu',
		},
		{
			orientation: 'portrait',
			name: 'h1zujs196p',
		},
		{
			orientation: 'portrait',
			name: '1lnnf61icgj',
		},
		{
			orientation: 'portrait',
			name: 'wg0pduqjx5',
		},
		{
			orientation: 'portrait',
			name: 'uxnsanyr2d',
		},
		{
			orientation: 'portrait',
			name: '83s6kocfd',
		},
		{
			orientation: 'portrait',
			name: '89i4zomh15',
		},
		{
			orientation: 'portrait',
			name: 'o9rzmu3v9',
		},
		{
			orientation: 'portrait',
			name: '4c13bmoi03',
		},
		{
			orientation: 'portrait',
			name: 'eaiek2ttso',
		},
		{
			orientation: 'portrait',
			name: 'tee6au5na5',
		},
		{
			orientation: 'portrait',
			name: 'ld7leafpye',
		},
		{
			orientation: 'portrait',
			name: 'c7qb3d8ycm',
		},
		{
			orientation: 'landscape',
			name: 'vu70shx3xz',
		},
		{
			orientation: 'portrait',
			name: 'g8kv13fuks',
		},
		{
			orientation: 'portrait',
			name: 'qm1n5ehclc',
		},
		{
			orientation: 'landscape',
			name: 'zfj7qa0sve',
		},
		{
			orientation: 'portrait',
			name: 'n53fo68s8x',
		},
		{
			orientation: 'portrait',
			name: '9hmzkh3gby',
		},
		{
			orientation: 'portrait',
			name: 'ntslyepuh3',
		},
		{
			orientation: 'portrait',
			name: '1o3qg8iagdl',
		},
		{
			orientation: 'portrait',
			name: 'hgftvzf7hj',
		},
		{
			orientation: 'portrait',
			name: 'mp5uvxewzp',
		},
		{
			orientation: 'portrait',
			name: 'jtfcyn9yvs',
		},
		{
			orientation: 'portrait',
			name: '3ctm65k3s5',
		},
		{
			orientation: 'portrait',
			name: 't18rdimx67',
		},
		{
			orientation: 'portrait',
			name: 'kkbbn8qgflh',
		},
		{
			orientation: 'portrait',
			name: '9pjvcd68ks',
		},
		{
			orientation: 'portrait',
			name: '0ce22qygkx',
		},
		{
			orientation: 'portrait',
			name: '29xk8kehob',
		},
		{
			orientation: 'portrait',
			name: 'vsy0ehkrp',
		},
		{
			orientation: 'landscape',
			name: 'q9yamwrgm8',
		},
		{
			orientation: 'portrait',
			name: 'tq3ubdp816',
		},
		{
			orientation: 'landscape',
			name: 'e0baidb42u',
		},
		{
			orientation: 'landscape',
			name: '4z8c2k8btu',
		},
		{
			orientation: 'landscape',
			name: 'rbblhmaipc',
		},
		{
			orientation: 'landscape',
			name: '0h9ck5en4j',
		},
		{
			orientation: 'landscape',
			name: 'nb1sb11fp2k',
		},
		{
			orientation: 'portrait',
			name: 'izwag7oi4q',
		},
		{
			orientation: 'portrait',
			name: 'yztjiwkpt5j',
		},

		{
			orientation: 'portrait',
			name: '68ujfnpj98',
		},
		{
			orientation: 'portrait',
			name: '6d0wa4cwmt',
		},
		{
			orientation: 'landscape',
			name: '1whor8r6b5',
		},
		{
			orientation: 'landscape',
			name: '1gryj4k2zt',
		},
		{
			orientation: 'landscape',
			name: 'hks4t8lxkd',
		},

		{
			orientation: 'landscape',
			name: 'erws2tr4ti',
		},
		{
			orientation: 'landscape',
			name: '7glc4d6qvv',
		},
		{
			orientation: 'landscape',
			name: 'bbuhuk5fam',
		},
		{
			orientation: 'landscape',
			name: 'im8zvjyh4ng',
		},
		{
			orientation: 'landscape',
			name: 'qydhtlhzzk',
		},
		{
			orientation: 'portrait',
			name: '0njs9608jw',
		},
		{
			orientation: 'landscape',
			name: '9icj4a11uw',
		},
		{
			orientation: 'landscape',
			name: 'n36ba6tlum',
		},

		{
			orientation: 'landscape',
			name: 'zrt24inept',
		},
		{
			orientation: 'portrait',
			name: '6jufqf6qlj',
		},
		{
			orientation: 'portrait',
			name: 'yqde5684vk',
		},

		{
			orientation: 'portrait',
			name: 'ftmbw7nzp6',
		},
		{
			orientation: 'portrait',
			name: 'xriuqs02vhj',
		},
		{
			orientation: 'portrait',
			name: 'whkz9z9k67',
		},
		{
			orientation: 'portrait',
			name: '1ywq3crlyt',
		},
		{
			orientation: 'portrait',
			name: 'l06bslzie6',
		},
		{
			orientation: 'portrait',
			name: 'p2novzp6p3',
		},
		{
			orientation: 'portrait',
			name: 'v1wv98kf9qk',
		},
		{
			orientation: 'portrait',
			name: '5r3xulpx7a',
		},
		{
			orientation: 'portrait',
			name: 'lnwghjyx3k',
		},
		{
			orientation: 'portrait',
			name: 'vhqcxojx14',
		},
		{
			orientation: 'portrait',
			name: '9kyeio4kh3',
		},
		{
			orientation: 'portrait',
			name: 'nw9yrw8yt6',
		},
		{
			orientation: 'portrait',
			name: 'tpuauwv2yk',
		},
		{
			orientation: 'portrait',
			name: '8z3ei90b2k',
		},
		{
			orientation: 'portrait',
			name: '7c5vzuydnh',
		},
		{
			orientation: 'portrait',
			name: 'potogcmi5k',
		},
		{
			orientation: 'portrait',
			name: '1qjy9bj4yq',
		},
		{
			orientation: 'portrait',
			name: '2ptnsbcjit',
		},
		{
			orientation: 'portrait',
			name: 'fjeogj3ray',
		},
		{
			orientation: 'portrait',
			name: 'vuu8elaax6',
		},
		{
			orientation: 'portrait',
			name: 'kt6dek5foz',
		},
		{
			orientation: 'portrait',
			name: 'aarvixi223',
		},
		{
			orientation: 'portrait',
			name: 'jaxojwootr',
		},
		{
			orientation: 'landscape',
			name: 'taa5xz6q02',
		},
		{
			orientation: 'landscape',
			name: '3dgq0ttskk',
		},
	];

	Object.values(officialPhotos).forEach((val) => {
		$('#official-viewer').append(
			'<div class="box width-' + val.width + ' ' + val.orientation + '">\
				<picture>\
					<source media="(min-width: 578px)" srcset="assets/img/official/' + val.name + '.jpg" />\
					<img loading="lazy" src="assets/img/official/mobile/' + val.name + '.jpg" />\
				</picture>\
			</div>'
		);
	});

	Object.values(famfndsPhotos).forEach((val) => {
		if (val.type == 'video') {
			$('#famfnds-viewer').append(
				'<div class="box width-4 ' + val.orientation + '">\
					<video type="video/mp4" preload="poster" src="assets/img/famfnds/' + val.name + '.mov"></video>\
					<svg viewBox="0 0 40 35"><path d="m0 0 40 17.5-40 17.5z" fill="#dfd3c2"></path></svg>\
				</div>'
			);
		} else {
			$('#famfnds-viewer').append(
				'<div class="box width-4 ' + val.orientation + '">\
					<picture>\
						<img loading="lazy" src="assets/img/famfnds/' + val.name + '.jpg" />\
					</picture>\
				</div>'
			);
			}
	});

	Object.values(collabPhotos).forEach((val) => {
		$('#collab-viewer').append(
			'<div class="box width-4 ' + val.orientation + '">\
				<picture>\
					<img loading="lazy" src="assets/img/collab/' + val.name + '.jpg" />\
				</picture>\
			</div>'
		);
	});

	const modal = $('.modal');

	$('.viewer picture').on('click',function() {
		const imgSrc = $(this).find('img').attr('src');
		$('.modal img').attr('src',imgSrc);
		modal.addClass('show image');
	});

	$('.viewer video').on('click',function() {
		const videoSrc = $(this).attr('src');
		$('.modal video').attr('src',videoSrc);
		modal.addClass('show video');
	});

	$('.modal-close').on('click',function() {
		$('.modal img').attr('src','');
		$('.modal video').attr('src','');
		modal.removeClass('show image video');
	});

});