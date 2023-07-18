"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8006],{34123:function(e,t,i){i.d(t,{KY:function(){return n}});var o,l,a=i(99640);(o=l||(l={})).PROFILE_EDIT="profile_edit",o.PROFILE_VIEWED="profile_viewed",o.GENERATE_REFERRAL="generate_referral",o.ADD_FOLLOW="add_follow",o.REMOVE_FOLLOW="remove_follow",o.VIEW_FOLLOWED_ITEM="view_followed_item",o.ADD_HIDE="add_hide",o.REMOVE_HIDE="remove_hide",o.BUY_ANY_ACTIVITY_SWAP_NOW="buy_any_activity_swap_now",o.BUY_ANY_ACTIVITY_CANCEL="buy_any_activity_cancel",o.BUY_ANY_ACTIVITY_CANCELLED="buy_any_activity_cancelled";let n=new class{constructor(){this.emitProfileEdit=e=>{var t,i,o,n;let{updatedProfile:r}=e;a.I.emitEvent(l.PROFILE_EDIT,{has_photo:(null==r?void 0:null===(t=r.profileImage)||void 0===t?void 0:t.imageUrl)!="",photo_is_nft:null!=r&&null!==(i=r.profileImage)&&void 0!==i&&!!i.isNft,has_bio:(null==r?void 0:r.bio)!="",has_twitter:(null==r?void 0:null===(o=r.socialMedia)||void 0===o?void 0:o.twitter)!="",has_discord:(null==r?void 0:null===(n=r.socialMedia)||void 0===n?void 0:n.discord)!=""})},this.emitProfileViewed=e=>{var t,i;let{profile:o,tokens:n,nfts:r}=e;a.I.emitEvent(l.PROFILE_VIEWED,{profile_address:null==o?void 0:o.id,has_tokens:n.length>0,has_nfts:r.length>0,has_bio:!!o&&""!=o.bio,has_twitter:!!o&&(null===(t=o.socialMedia)||void 0===t?void 0:t.twitter)!="",has_discord:!!o&&(null===(i=o.socialMedia)||void 0===i?void 0:i.discord)!=""})},this.emitGenerateReferral=e=>{let{token:t}=e;a.I.emitEvent(l.GENERATE_REFERRAL,{token_specific_referral:!!t,token_symbol:null==t?void 0:t.symbol})},this.emitAddFollow=e=>{let{followType:t,followListId:i,identifier:o,name:n}=e;a.I.emitEvent(l.ADD_FOLLOW,{follow_type:t,follow_list_id:i,followed_item_identifier:o,followed_item_name:n})},this.emitRemoveFollow=e=>{let{followType:t,followListId:i,identifier:o,name:n}=e;a.I.emitEvent(l.REMOVE_FOLLOW,{follow_type:t,follow_list_id:i,followed_item_identifier:o,followed_item_name:n})},this.emitViewFollowedItem=e=>{let{itemType:t,itemIdentifier:i,itemName:o}=e;a.I.emitEvent(l.VIEW_FOLLOWED_ITEM,{follow_type:t,followed_item_identifier:i,followed_item_name:o})},this.emitBuyAnySwapNow=e=>{a.I.emitEvent(l.BUY_ANY_ACTIVITY_SWAP_NOW,{quote_id:e.quoteId,token_address:e.indirectToken.address,token_network:e.network,fiat_amount:e.fiatAmount,fiat_symbol:e.fiatSymbol,payment_type:e.paymentType,provider:e.provider})},this.emitBuyAnyCancel=e=>{a.I.emitEvent(l.BUY_ANY_ACTIVITY_CANCEL,{quote_id:e.quoteId,token_address:e.indirectToken.address,token_network:e.network,fiat_amount:e.fiatAmount,fiat_symbol:e.fiatSymbol,payment_type:e.paymentType,provider:e.provider})},this.emitBuyAnyCancelled=e=>{a.I.emitEvent(l.BUY_ANY_ACTIVITY_CANCELLED,{quote_id:e.quoteId,token_address:e.indirectToken.address,token_network:e.network,fiat_amount:e.fiatAmount,fiat_symbol:e.fiatSymbol,payment_type:e.paymentType,provider:e.provider})},this.emitAddHide=e=>{let{hideType:t,hideItemIdentifier:i,hideItemName:o}=e;a.I.emitEvent(l.ADD_HIDE,{hide_type:t,hide_item_identifier:i,hide_item_name:o})},this.emitRemoveHide=e=>{let{hideType:t,hideItemIdentifier:i,hideItemName:o}=e;a.I.emitEvent(l.REMOVE_HIDE,{hide_type:t,hide_item_identifier:i,hide_item_name:o})}}}},68602:function(e,t,i){i.d(t,{Sx:function(){return r}});var o,l,a=i(90774),n=i(90916);(o||(o={})).PROFILE="profiles",(l||(l={})).PROFILE_PICS="profile_pics";let r=new class{async createProfile(e){let{setDoc:t,doc:l,serverTimestamp:a,getFirestore:r}=await Promise.all([i.e(2016),i.e(6640)]).then(i.bind(i,19)),d=r(n.I.firebaseApp),s=this.profileToFirebaseProfile(e);await t(l(d,o.PROFILE,s.id),{...s,created:a(),updated:a()})}async updateProfile(e){let{setDoc:t,doc:l,serverTimestamp:a,getFirestore:r}=await Promise.all([i.e(2016),i.e(6640)]).then(i.bind(i,19)),d=r(n.I.firebaseApp),s=this.profileToFirebaseProfile(e),{id:f,profile_wallet_address:c,...u}=s;await t(l(d,o.PROFILE,s.id),{...u,updated:a()},{merge:!0})}async uploadPicture(e){let{file:t,profileId:i}=e,o=(0,a.iH)(n.I.storage,"".concat(l.PROFILE_PICS,"/").concat(i));await (0,a.KV)(o,t);let r=await (0,a.Jt)(o);return r}profileToFirebaseProfile(e){var t,i,o,l,a;let n={id:e.id,bio:e.bio,profile_wallet_address:e.profileWalletAddress,profile_wallet_name:e.profileWalletName};return(null===(t=e.socialMedia)||void 0===t?void 0:t.discord)!=null&&(n.discord=null===(o=e.socialMedia)||void 0===o?void 0:o.discord),(null===(i=e.socialMedia)||void 0===i?void 0:i.twitter)!=null&&(n.twitter=null===(l=e.socialMedia)||void 0===l?void 0:l.twitter),e.profileImage&&null!=e.profileImage.isNft&&(n.profile_image={is_nft:e.profileImage.isNft,link:null!==(a=e.profileImage.imageUrl)&&void 0!==a?a:""}),n}}},67832:function(e,t,i){var o,l;i.d(t,{f:function(){return o}}),(l=o||(o={})).WALLET="wallet",l.NFT="nft",l.TOKEN="token"},41141:function(e,t,i){var o,l;i.d(t,{V:function(){return o}}),(l=o||(o={})).WALLET="wallet",l.NFT="nft",l.TOKEN="token"},59971:function(e,t,i){i.d(t,{T:function(){return d}});var o=i(85945),l=i(48228),a=i(48791),n=i(87291),r=i(45356);let d=e=>{let{selectedAccount:t}=(0,a.Z_)(),i=(0,o.NL)();return(0,l.D)(e=>n.Mp.addFollow(e),{...e,onMutate:o=>{var l;o.body.forEach(e=>{var o;let l={address:t,followListIds:[e.followListId]},a=r.a.follows({queryParameters:l}),n=i.getQueryData(a),d={...e,id:"".concat(e.identifier,"-temp")},s=null==n?void 0:n.result.some(e=>e.identifier===d.identifier),f={...n,result:s?null==n?void 0:n.result:[d].concat(null!==(o=null==n?void 0:n.result)&&void 0!==o?o:[])};i.setQueriesData(a,f)}),null==e||null===(l=e.onMutate)||void 0===l||l.call(e,o)},onSuccess:(o,l,a)=>{var n;let d=[...new Set(l.body.map(e=>e.followListId))];d.forEach(e=>{i.invalidateQueries(r.a.follows({queryParameters:{address:t,followListIds:[e]}}))}),null==e||null===(n=e.onSuccess)||void 0===n||n.call(e,o,l,a)}})}},76538:function(e,t,i){i.d(t,{K:function(){return s},U:function(){return f}});var o=i(99740),l=i(67832),a=i(41141);let n=[{id:"0xe11BFCBDd43745d4Aa6f4f18E24aD24f4623af04",identifier:"0xe11BFCBDd43745d4Aa6f4f18E24aD24f4623af04",name:"Cdixon.eth",type:a.V.WALLET,followListId:l.f.WALLET},{id:"0xE69fD2b53837cc886ce555ADa40e39Ca721e21aE",identifier:"0xE69fD2b53837cc886ce555ADa40e39Ca721e21aE",name:"Laurdiy.eth",type:a.V.WALLET,followListId:l.f.WALLET},{id:"0x7b775927FD637b3A53d0EE9E85321005666F3d49",identifier:"0x7b775927FD637b3A53d0EE9E85321005666F3d49",name:"Treysongz.eth",type:a.V.WALLET,followListId:l.f.WALLET}],r=[{id:"0x369156da04b6f313b532f7ae08e661e402b1c2f2::eth",identifier:"0x369156da04b6f313b532f7ae08e661e402b1c2f2",name:"Gen-F",network:o.cU.ETHEREUM_MAINNET,logoUrl:"https://lh3.googleusercontent.com/Vr2LqMRAwYyHyP0fm-5RWY-GXrdFOKJuMINf_e9eRWUhPjVx8RH_d1MUMspRGgL49eJhsZX1jK03ksZPojbfVDsJjz-jzc0E4AwudVo=s120",type:a.V.NFT,followListId:l.f.NFT},{id:"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d::eth",identifier:"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",name:"Bored Ape Yacht Club",network:o.cU.ETHEREUM_MAINNET,logoUrl:"https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s168",type:a.V.NFT,followListId:l.f.NFT},{id:"0x8a90cab2b38dba80c64b7734e58ee1db38b8992e::eth",identifier:"0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",name:"Doodles",network:o.cU.ETHEREUM_MAINNET,logoUrl:"https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s168",type:a.V.NFT,followListId:l.f.NFT},{id:"0xc9d8f15803c645e98b17710a0b6593f097064bef::eth",identifier:"0xc9d8f15803c645e98b17710a0b6593f097064bef",name:"Flyfish Club",network:o.cU.ETHEREUM_MAINNET,logoUrl:"https://lh3.googleusercontent.com/3mPdo7sj92tMMNcr8-t51cFsTPVJuEZaxkL8Wx_1rPo5mHIqdRmCwC33u6bdLSR7y3TwN2mS4rBCPffsDTdtDGebDWJ-cG2WD-Ha4g=s168",type:a.V.NFT,followListId:l.f.NFT}],d=[{id:"bnb",identifier:"bnb",name:"BNB Native",network:o.cU.BINANCE_MAINNET,logoUrl:"https://tokens-list.s3.eu-central-1.amazonaws.com/bsc-bnb.svg",type:a.V.TOKEN,followListId:l.f.TOKEN},{id:"matic",identifier:"matic",name:"Matic Native",network:o.cU.POLYGON_MAINNET,logoUrl:"https://tokens-list.s3.eu-central-1.amazonaws.com/matic-matic.png",type:a.V.TOKEN,followListId:l.f.TOKEN},{id:"eth",identifier:"eth",name:"Ethereum",network:o.cU.ETHEREUM_MAINNET,logoUrl:"https://tokens-list.s3.eu-central-1.amazonaws.com/eth-eth.svg",type:a.V.TOKEN,followListId:l.f.TOKEN}],s=[...n,...d,...r],f={[l.f.NFT]:r,[l.f.TOKEN]:d,[l.f.WALLET]:n}},85436:function(e,t,i){i.d(t,{H:function(){return _}});var o=i(67294),l=i(48791),a=i(85945),n=i(48228),r=i(45356),d=i(68602);let s=e=>{let t=(0,a.NL)();return(0,n.D)(e=>d.Sx.createProfile(e),{...e,onSuccess:(i,o,l)=>{var a;let n={id:o.id},d=r.a.profile({pathParameters:n});t.invalidateQueries(d),null==e||null===(a=e.onSuccess)||void 0===a||a.call(e,i,o,l)}})};var f=i(59971),c=i(76538);let u=e=>({id:e,profileWalletAddress:e,profileWalletName:"",bio:""}),_=e=>{let{onSuccess:t,onError:i}=e,{selectedAccount:a}=(0,l.Z_)(),n=(0,o.useRef)(),r=(0,o.useRef)(),d=()=>{n.current=void 0,r.current=void 0,null==i||i()},{mutate:_,isLoading:E}=(0,f.T)({onSuccess:()=>{null==t||t(void 0,n.current),n.current=void 0,r.current=void 0},onError:d}),{mutate:m,isLoading:v}=s({onSuccess:(e,t)=>{n.current=t;let i=null!=r.current?c.K.filter(e=>{var t;return!(null===(t=r.current)||void 0===t?void 0:t.includes(e.identifier.toLowerCase()))}):c.K;_({body:i})},onError:d}),p=(0,o.useCallback)(e=>{let{profile:t,excludeFollowItems:i}=e;if(!a)throw Error("useCreatePopulatedProfile: user is not connected");let o=null!=t?t:u(a);r.current=null==i?void 0:i.map(e=>e.toLowerCase()),m(o)},[a,m]);return{mutate:p,isLoading:v||E}}}}]);