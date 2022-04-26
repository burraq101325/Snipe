const ethers = require("ethers");
const abiDecoder = require('./abi-decoder');
const required_Items = require('./cfg.json');

abiDecoder.addABI(required_Items.routerABI)

// S1 = abiDecoder.decodeMethod(`0x18cbafe50000000000000000000000000000000000000000000000056bc75e2d631000000000000000000000000000000000000000000000000000000001c54024f15fdd00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000328f9a19627fc376c95a852622798f5ce2f433670000000000000000000000000000000000000000000000000000000061a5aee000000000000000000000000000000000000000000000000000000000000000020000000000000000000000005592ec0cfb4dbc12d3ab100b257153436a1f0fea000000000000000000000000c778417e063141139fce010982780140aa0cd5ab`)
// // console.log("swapExactTokensForETH:", S1)
// console.log("Decoded:", S1, `
//             Func:`, S1.name, `
//             Token0:`, token0 = S1.params[2].value[0],`
//             Token1`, toeken1 = S1.params[2].value[1] );

// S2 = abiDecoder.decodeMethod(`0x4a25d94a00000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000000000000000000000000009dd21773a57408b0100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000328f9a19627fc376c95a852622798f5ce2f433670000000000000000000000000000000000000000000000000000000061a5dcb600000000000000000000000000000000000000000000000000000000000000020000000000000000000000005592ec0cfb4dbc12d3ab100b257153436a1f0fea000000000000000000000000c778417e063141139fce010982780140aa0cd5ab`)
// // console.log("swapTokensForExactETH:", S2)
// console.log("Decoded:", S2, `
//             Func:`, S2.name, `
//             Token0:`, token0 = S2.params[2].value[0],`
//             Token1`, toeken1 = S2.params[2].value[1] );

// S3 = abiDecoder.decodeMethod(`0x8803dbee00000000000000000000000000000000000000000000000ad78ebc5ac6200000000000000000000000000000000000000000000000000009c2007651b250000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000328f9a19627fc376c95a852622798f5ce2f433670000000000000000000000000000000000000000000000000000000061a4a1b80000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c778417e063141139fce010982780140aa0cd5ab0000000000000000000000005592ec0cfb4dbc12d3ab100b257153436a1f0fea`)
// // console.log("swapTokensForExactTokens:", S3)
// console.log("Decoded:", S3, `
//             Func:`, S3.name, `
//             Token0:`, token0 = S3.params[2].value[0],`
//             Token1`, toeken1 = S3.params[2].value[1],`
//             AmountIn:`,  S3.params[0].value, `
//             AmountOut:`, S3.params[1].value, `
//             Check:`, S3.params[1].value);

Map = abiDecoder.decodeMethod(`0x38ed1739000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000006063914cac4b5eaf3800000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000328f9a19627fc376c95a852622798f5ce2f433670000000000000000000000000000000000000000000000000000000061a0b6ea0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c778417e063141139fce010982780140aa0cd5ab0000000000000000000000005592ec0cfb4dbc12d3ab100b257153436a1f0fea`)
// console.log("swapExactTokensForTokens:", S4)
// let methodId = ("0x38ed1739000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000006063914cac4b5eaf3800000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000328f9a19627fc376c95a852622798f5ce2f433670000000000000000000000000000000000000000000000000000000061a0b6ea0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c778417e063141139fce010982780140aa0cd5ab0000000000000000000000005592ec0cfb4dbc12d3ab100b257153436a1f0fea").slice(0,10)
// console.log(methodId,
//     methodId=="0x38ed1739",
//     methodId === "0x38ed1739",
//     )
    console.time("M")
    const [v, m] = Map.params.map((z) => z.value)
    console.log("Maping:",v, m)
    console.timeEnd("M")    

    // fetch = abiDecoder.decodeMethod(`0x38ed1739000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000006063914cac4b5eaf3800000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000328f9a19627fc376c95a852622798f5ce2f433670000000000000000000000000000000000000000000000000000000061a0b6ea0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c778417e063141139fce010982780140aa0cd5ab0000000000000000000000005592ec0cfb4dbc12d3ab100b257153436a1f0fea`)
    // console.time("f")
    // const k = fetch.params[0].value
    // const h = fetch.params[1].value
    // console.log("Fetch:",k, h)
    // console.timeEnd("f")
    

//     console.time("fetch")
//     console.log(S4,
//         `
//     `, 
//         S4.params[0].value,
//         S4.params[1].value,
//         S4.params[2].value,
//          S4.params[3].value,
//          S4.params[4].value);
//           console.timeEnd("fetch")

// console.time("map")
// const [amountIn, amountOutMin, path, , ] = S4.params.map((x) => x.value)
// console.log(`
//     `,amountIn,
//          amountOutMin,
//           path, )
// m = console.timeEnd("map")

//             // var Check = console.log(ethers.utils.BigNumber.From(S4.params[1].value))
// var Slip = (S4.params[1].value)*(95/100)
// console.log(Slip)
// S5 = abiDecoder.decodeMethod(`0xfb3bdb4100000000000000000000000000000000000000000000003635c9adc5dea000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000328f9a19627fc376c95a852622798f5ce2f433670000000000000000000000000000000000000000000000000000000061a5e77a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c778417e063141139fce010982780140aa0cd5ab0000000000000000000000005592ec0cfb4dbc12d3ab100b257153436a1f0fea`)
// // console.log("swapETHForExactTokens:", S5)
// console.log("Decoded:", S5, `
//             Func:`, S5.name, `
//             Token0:`, token0 = S5.params[1].value[0],`
//             Token1`, toeken1 = S5.params[1].value[1] ); 

// S6 = abiDecoder.decodeMethod(`0x7ff36ab50000000000000000000000000000000000000000000001c9e7143bd3eaafdd470000000000000000000000000000000000000000000000000000000000000080000000000000000000000000328f9a19627fc376c95a852622798f5ce2f433670000000000000000000000000000000000000000000000000000000061a5cb040000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c778417e063141139fce010982780140aa0cd5ab0000000000000000000000005592ec0cfb4dbc12d3ab100b257153436a1f0fea`)
// // console.log("swapExactETHForTokens:", S6)
// console.log("Decoded:", S6, `
//             Func:`, S6.name, `
//             Token0:`, token0 = S6.params[1].value[0],`
//             Token1`, toeken1 = S6.params[1].value[1] ); 

// abiDecoder.addABI(required_Items.FactoryABI)

// CP = abiDecoder.decodeMethod(`0xc9c653960000000000000000000000009a0c070cb76f99513df8c9ab8370f346654650f1000000000000000000000000c778417e063141139fce010982780140aa0cd5ab`);
// // console.log(`Create Pair:`, L)
// console.log("CreatePair:", CP, `
//             Func:`, CP.name, `
//             Token0:`, token0 = ethers.utils.getAddress(CP.params[0].value),`
//             Token1:`, toeken1 = ethers.utils.getAddress(CP.params[1].value))
// AL = abiDecoder.decodeMethod(`0xe8e33700000000000000000000000000c778417e063141139fce010982780140aa0cd5ab000000000000000000000000fbd967a966e21ea5b8b12ce34d03b5cc9bd010120000000000000000000000000000000000000000000000000012384c73d0846f000000000000000000000000000000000000000000000030ca024f987b900000000000000000000000000000000000000000000000000000001220fa266f79880000000000000000000000000000000000000000000000308b8f19700a4e0000000000000000000000000000a82ed292002c78cd974748a13769e9946261259e0000000000000000000000000000000000000000000000000000000061b9859b`);
// // console.log(`Added Liquidity:`, L)
// console.log("Add Liquidity of Already made pair:", AL, `
//             Func:`, AL.name, `
//             Token0:`, token0 = ethers.utils.getAddress(AL.params[0].value),`
//             Token1:`, toeken1 = ethers.utils.getAddress(AL.params[1].value))

// AL = abiDecoder.decodeMethod(`0xe8e33700000000000000000000000000c778417e063141139fce010982780140aa0cd5ab000000000000000000000000cdaa0dc0a1bf7b31eb094cad43454af2ca75131a000000000000000000000000000000000000000000000000013fbe85edc900000000000000000000000000000000000000000000000000007ce66c50e2840000000000000000000000000000000000000000000000000000013fbe85edc900000000000000000000000000000000000000000000000000007ce66c50e2840000000000000000000000000000a82ed292002c78cd974748a13769e9946261259e0000000000000000000000000000000000000000000000000000000061b9a5a4`);
// // console.log(`Added Liquidity:`, L)
// console.log("Add Liquidity of new pair:", AL, `
//             Func:`, AL.name, `
//             Token0:`, token0 = ethers.utils.getAddress(AL.params[0].value),
//             `Token0R:`, token0R = AL.params[0],`
//             Token1:`, toeken1 = ethers.utils.getAddress(AL.params[1].value))
            