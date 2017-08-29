(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('克孜勒苏柯尔克孜自治州', {"type":"FeatureCollection","features":[{"type":"Feature","id":"653001","properties":{"name":"阿图什市","cp":[76.1684,39.71616],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MAE@O@EBMBMDGBIAC@E@G@OBKBGBEBG@EAIAM@SDA@@DBFDZADABCDKFWPk`UPEDEBC@GACBCDCDABG@E@G@GBIDaFKBK@C@AAAAAIACCI@CA@A@C@ABCB@@ABAPADABA@I@C@ACA@A@@BAF@B@@ABA@ACAAA@AAAA@A@AAAA@EAA@C@IE@@@CFGBC@AAAA@A@ABCDC@I@@BC@CFADAD@D@B@BBFBD@BBB@B@D@ZAPBF@BBFBBBD@DAB@B@@AHAHAHAH@B@F@F@BDDHHDDBJBFFHBJNHJD@@@@TDB@DB@RCB@rK`@NANEHCDFFJ@BFJDN@FAH@@EP@nFPF@RBhJJ@BT@FAVQPKLO`BCDEFEBABABBB@B@DB@@@@@@@BBBBDBFBDBFBFFLHFLLFJ@@DDFFFFBF@FDDDDPJVJFDTDJ@P@NANEJCNKFOBABANBP@F@VDZHLBHDDBB@D@D@B@D@F@B@B@@@@B@@@B@BKLQPAD@DFHDFBF@N@FFJDFBHDB@FABEBGBQLGFCD@B@BADEDCLCHEFEDGDoXEFCFBB@@BB@D@BBD@BBDBB@B@@@@@@BDBD@B@@@@@@BDBBBB@@@@BDBB@B@BBBBBBDDBBBBDBBBDBBBDBBBB@@@@@@DBBDBBBDBBBBBDBB@B@FCFAHAH@HAR@H@JOhBHGRBL@BDPAPADCDCJEDEFGBA@EHAHIhERENEDELKPGJENIFIJADBNLHDLLH@HBJHHBBDFJJLBHHALFN@LFNBF@PIH@HFHDHAJDF@LDHDBFHAHCDAHDHNCLHHLDRERCR@PHHRDNLJLHDFJR^LJZFPENODI\\CJIHIN@`DBHARCL@NFNRFZFVBZCLELDRF\\@PAPCTEVGRGFAPDXHTHPHVNNNNN\\JRHLHRTJBNMBIEMCIFKNET@TALEJOJGBOAGEIAOJUJYL@HCFRDRLJLNLTbVHCHWL@RFHHNF\\APDJFHPFHXNJJJPVJR@R@L@JDDRBLHLJHLDJBHFHJFVDV@VENBLBJDHFNHNHPBFFHLRZXNJLFTHHNDLBFBDTDBBPB\\FTFZJHHNJHBHBFDFDLNDBDBF@B@D@FARCRALBHBVLFDBFFJDDJDRFLFJF@@BBB@B@B@B@B@FADAB@F@HBNDPDD@L@H@H@H@HDNNFBNBL@P@LDPDDhBLAJALCNKRIHCRGPCRCNALCHANCFABABCBAAEBAAQAEAECG@@ECEEAA@A@EFSHYDMDEDAHELCBAD@LCHAJAHBFBJ@P@H@JCD@DADBFBD@B@F@J@X@LBXDPBH@F@LAHAFAB@F@F@FB`LDBD@JDHB@@B@JBFBNHLFNFFBFDH@H@L@XBXABCTIVCdBT@RA\\KTHXJ^H^JR@TKROXK`EV@^FfLhHXH^JbC\\G`GTAFBH@FAF@B@B@BBHBHBHBB@PDLFB@B@PJNLLLBDD@D@BABQBG@E@CAECCCIACBGBGHOHMJSLMJKFGBAJGNGLIJKLOJSFQJQDEBABENMNMJKHGJELKRMPKXSLEJAFADC@A@ENYDeDKDMDIBCHAPAh@Bj@lGjBfFPBH@LADAL@HBB@B@@@FAFAFAFCFADADAHAFAFAB@B@DATGHAD@F@F@F@HCJEBAHE@@@@DAB@BAB@DEDADAHCDAD@FAH@F@B@@@B@B@DB@AB@H@F@D@F@FBBDDBDDJDBBB@J@D@FABAH@D@KGMIOMKYG]KMIEQEK@O@CACC@IBSEM@QESOOUOGKGO@IAQCEIOAIBCXSBGGKCUGKGGGCMIMKAIAQBKFIPKLAHBPDLANQHAPIBG@GHELEF@FHLFH@H@LCTALBLBL@F@VHFBRALCPAVC^BZBNAJGPCL@PFRJLBL@XCL@JAN@PATIHGNINEDCGEQI@CBGHILGJELCXIBA@C@CBA@@CAAA@@@@@BA@@@A@AA@@A@A@A@A@A@A@E@A@CAC@A@C@CAA@A@@@C@ABEBA@@@@@@A@@A@@@@BA@@@C@AAA@@@A@@@@@A@CB@@@@@@A@@@@@AA@@@@@@@BA@@@@@@@A@C@@@@@@@A@@@@@ABA@@B@@@@C@@@@BA@@@A@@B@@@@A@@@A@@@@@A@@@A@ABC@@@AAA@A@AA@AA@AA@@A@@@@AA@@@A@@@@@A@@A@@@@A@@@A@@@AA@@A@@@A@@@@@@@@@@@A@@A@@A@@@@AAB@@@@A@@@@AA@@@@@@@A@@A@@A@@B@@@@@@@@A@AA@@A@@@A@@@@@@@@@A@@@@@@@@@@BA@@@A@@@A@@@@A@@@@@@@@@@A@@@@@AB@@@@A@@A@@A@@@@@@@@@@@@A@@A@@B@@@@@@@@@@AA@@@@A@@B@@@BA@@@A@A@@@A@@B@@A@@AA@A@@@@@A@@@@B@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@A@@@@@@@A@@@@@@@A@@A@B@AA@@A@@@A@@@A@@@@@@@@@@A@@@AB@@A@@@@AA@@A@@@@A@@@@@A@@@A@@B@@A@@@@@@@AB@@A@@@A@@@A@@@A@A@@@@@@@@B@@@@@@A@@@A@@@@@AB@@A@A@ABA@A@@BC@@@A@AA@@@AA@A@A@AA@@A@A@A@A@@@@A@@@@@@@AA@@@A@@@AAA@A@@@A@@A@@@@@@A@@@@@A@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@BA@@A@@@@@ABA@@@@@@@A@@@@@A@@@@@AA@@ABA@@@@AA@@@A@A@@@@AA@@@A@A@@@AAC@@@C@@@A@@@@AA@@@A@@@A@@@A@@@@@A@@@A@AAA@@@@@A@@A@@@@AB@@A@@@A@@@AAA@@@@@@@@B@@A@@@A@@@A@@@@A@@@@@@A@@@@@A@@@@@AA@@AACCA@@@@@A@@@@BABA@A@@@@@@@@@A@@@@@@@@BA@@@@@A@@@A@C@@AA@@@@A@@@@@@A@@@A@AAA@@@@AA@@@A@@@C@@@AA@@@@@A@@A@@@A@@BA@A@A@A@@A@@@@@@@@A@A@A@@@A@AAAA@@@@@@A@@@@@A@@BA@A@AAA@@AA@@AA@@@A@@@@@@AA@@@@@A@A@@@A@@@A@C@A@@@@A@@A@A@AAC@A@C@@@AA@AA@@@A@@@A@@BA@@@A@@@A@@AA@@@AB@@A@@AA@@@@@A@@@A@A@@@AA@@A@@@@@A@@@A@@@A@@AA@A@AA@@CA@ACAC@CAA@A@C@@@A@@@A@@@A@@@A@@@A@ABABCBEBABCBCBCBABA@CBA@C@CBC@CBC@A@ABG@A@CBC@C@G@A@A@A@@@@@C@A@A@A@A@A@@@@AA@CAA@@@A@@@AAA@@@A@@A@@@@AA@@@@@@A@AB@@@@A@AAAAAAC@A@CAKBUBA@A@AACAICAAC@A@CBE@GBKBE@C@CAICA@ABABCBEBEBSBC@EAI@W@G@KD[FCBG@C@UCGAM@E@Q@EBIBWFQ@Q@C@CAA@CCAEA@CAAAMAC@AAAA@CAAEAMCE@O@GAGAM@UEGEGCMEICKAYEiEY@QAO@]AK@G@A@AAGGCGA@GCmCiCKAgGKAGGGKAAAA@A@AGAGECC@GACDED[@C@CACGCMAMAA@O@k@WBK@UGaAA]@OAAA@ADE@CC@C@EBG@S@ODAA]BK@O@]GUEQAWC[E[@eEOB[@OB[DYDe@WBkBKAUFqFOBKAUSGGGCOCWAqC@@A@QAGUAµG@@@@SA]@KCACQIOCCCCAA@AIEKGQMAAAAACCCCAACCAAAACCA@@@@@A@@E@GCQGC@@@@@AA]MGCKECAACAAECCACCAACCECGEAAAA@AA@@@AAA@GGKIA@CCEEAACCAAA@CAECGEKECC@@OIKECACC@@A@CEAAECCCECCCEESSMG@@A@gSC@@A@@@A@@@@AA@AAAA@@@AAE@AACAA@@@@B@@@@A@A@@A@A@A@ABA@A@E@C@ABABAA@@@A@@@@AB@BC@@@AGICC@AA@@@A@AAAAAB@@CBE@AACAGI@AAAECCAC@CAAAA@A@C@A@AAA@A@@@A@AAA@A@A@@@CBABAAA@C@E@E@C@@@A@C@GBI@C@A@AAAA@@A@A@A@@@@A@@A@GBABEBA@@@ABA@@@@AA@@@@A@@A@@@A@A@@@A@A@A@A@A@@@@@A@A@A@@@A@A@AA@@A@A@A@A@@AC@A@A@A@@@A@@AA@@A@@A@@AA@@AAAA@@@A@A@A@A@@AA@@@@@AAA@@@@ACA@@A@@@AAA@@@@@A@@B@AA@A@@@ABA@@@A@A@@AC@@A@@@@A@A@@@@@A@@@A@@A@@AA@@AB@@A@@@@@A@@A@@A@@@@@@B@@@@AB@@A@ABA@A@@@@A@@AA@B@@A@@B@@A@A@@@AA@@A@A@@BA@@@A@@BA@C@@AA@@@A@A@CBA@@@@@ABA@@@@BA@@@@BA@AB@@ABAB@BA@@B@BA@@B@@@@A@@@A@@@A@@@AA@@@@A@@@A@A@@@AB@@A@@A@A@@@@A@A@AA@@A@@@A@@@A@@@@@A@@@A@@@@@AA@@@@A@@A@@@@@@@@@@A@@@@@A@@@@@@BA@@@@@A@@@C@AAAB@@AB@@@@ABA@AB@@CAA@@@@@CCA@@@A@@@A@@@A@@@@@ABA@@BA@A@@@A@@@@@@@A@AB@@A@C@@@AB@@@@A@@@A@A@A@@@A@A@A@AAA@A@C@@@C@A@C@ABA@AAA@@@ABA@AAAAA@AAA@A@A@CBA@@@AB@@AB@@C@@@A@@@@@AB@@A@A@@BA@A@A@@@A@A@@@A@A@@@A@A@@@A@@@A@C@A@AAA@A@A@@@ABGBMAA@A@CBABEFIJABKFcVGBKDWFA@CAC@CBCBG@@@A@ADC@EBE@AAEAC@AAA@C@E@C@CBC@A@CAAAAAI@GAC@A@ABA@C@C@CASEOCKCE@CBABIJCDC@G@E@CFC@CAUAG@C@ADABA@E@ECGAI@C@C@ABC@AACCEAAAC@A@EAO@YA_C_@WAMAI@G@KAC@G@C@AA@A@ABCDGDKHK@CBAA@@@AAA@A@A@A@AB@@AB@@CB@@ABA@EDA@A@A@ABAA@@ABA@ABA@A@AAA@@@A@AAA@A@A@E@A@@@A@ABA@A@CA@@A@ABA@@@A@ABA@@@CBCBA@@BCBABAAAB@@AACAA@A@C@@@A@AAAA@@CBA@A@A@A@A@@@ABA@C@A@AA@@AAAAA@AA@@A@ABA@AA@@@AA@A@A@CACAUEA@YCWACBI@M@CBM@MBEBIDC@C@CAECM@"],"encodeOffsets":[[77622,40539]]}},{"type":"Feature","id":"653023","properties":{"name":"阿合奇县","cp":[78.446253,40.936936],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MKSMQIKGEG@_DEDQ@KEQ@IGQAAC@G@ABEBC@I@A@AAICCCCAACEAE@C@E@G@A@@BCAA@A@@@A@E@G@EBC@CBGDCBCBCFA@ABA@CB@@@@GFABIFGDE@E@E@C@GBSHCBA@A@EBEBGBCBCBEBEDEBEBEB@@A@A@GAK@CBKBG@OAeEiAkHi@Ag@OBGBADCJCNCLCfMZ@F@BCDEBIBKFWTOLQNKLIFGHILMNMNAFABCFIRERITKPILKJMHIHABEHILKNITGNGPAHAHBDDJDDBF@D@FAHARABC@C@ACKKMKOIA@A@KEOCA@GAGAGAAAA@A@E@EBG@EASB_H[HaD]IWGgGeK]EU@_FWLQPSLQ@]I]GWISG[LQBS@cAUDSJADWBWAK@G@G@ECEAMEKEMGEAIAA@@@GAICC@CA_KEAE@E@A@EBGBKBE@G@OAWCKAW@I@E@A@C@EACACBC@IDG@O@I@EAGAIBGBKDC@ABKDGFCBCFCNGZET@F@BBBFFFD@@DHBFBFBRABBFABADABEBMDGBKDMBQDODQHGDQJMLKDIBKBgACOCKCO@K@MAEAMMGCG@G@G@K@C@OCMCGAE@A@CBEBA@A@A@A@A@AA@@IEKEQEICCCEIAEECUKGAKAQBQDEBC@A@E@CACAKMECECGAGAMIGGYISE[EOAAASCDLPNNFTBNBFHHBRDDD@JIb@RHLHJBH@bNJLL@BGLCNIFGBGPGJMXEZFV^T\\ZTAPCJHPRPTLPFLTF@NANOJBNTFBHEJBLBLDLBP@N@NDPFTJNJTLPDPFR\\NTBZADLPLTFTDT@PAR@@NFRBLBJT^RPPFPCFAXIP@NFTFRFNJHFDFFDVZFDHHTN\\LJBRKHGPIN@PBR@dFZ@^@NCTKJE@GISFE\\EVAPOZERKJKhHHLHFP@P@XFZF^EDA@IDANAH@BCHIHIH@Z@J@RDTJ`XLDRFXFLRL@PAPCNOTFLJRBTQREHEPEVBT@PBJIAOCUZCTANBPF^HTDF@LIFARDR@TKPENAHXDBV@D@LHF@Z@JDJ@\\JD@PGVETCTDJD^HPFRFJHDPNELETIHANATFBDDHDHBRHLJDR@NCN@F@NLDF@FMRMPENCJABAB@@AB@BA@@B@B@B@BAHAB@@AB@@BB@BBBBBCDAB@B@B@B@B@BBB@@BB@FBF@DBBBDBBBDBB@B@B@@B@@BBB@@BBBBBB@BB@BBFDBDDDB@FFDBDDDDDBJDBB@BD@F@LBDBBBFBDBF@DBHBJDFBFB@BB@B@B@@@DDBDDDDDBBDDBBBBB@DBFDBBD@B@FCB@D@BAFCB@D@F@B@D@BAF@B@B@FDD@D@B@JCDAB@FBB@B@D@B@B@DBB@D@B@BABABEBC@@BAB@B@B@DBD@B@B@@@FFB@@@B@B@B@B@B@DBDBHHB@BBBAD@@@B@D@B@DAB@B@BBHJBBDBB@DBD@F@DBF@D@BBB@BBBBFJBBB@BBF@H@D@DBDBBBB@FBHBBB@@@B@@@DAB@BB@@BB@BBB@HAH@B@DBB@DBBBD@BBB@BBB@FBB@DBB@DBD@B@@BB@BD@BB@BBB@B@F@B@FAFADABBB@HDBBD@D@H@DBFBDJ@BDDBBBFBD@DBFBD@F@FAB@F@H@D@FBF@D@DAD@D@B@BBDJJBFAHBD@D@D@DBFADADCDCBAB@B@BB@@BBBBBD@BBD@HBDBDBBD@B@FBDDHJJBDDB@DAFEHCFCFEHCFABADAD@BBBDBB@JBB@BB@@@B@BAD@D@BDFBBBBFBD@F@FBRDFBLDJBJBPBRDPDLBHBB@DBB@B@BAB@DCB@@A@@BAB@BAB@@AB@BAB@BAB@B@BBD@D@DBD@B@B@B@B@BADAD@BAB@BAB@BA@@B@B@B@@@B@@@B@@@BBB@BBBBD@BBD@B@@@B@B@BADAB@BAB@@@B@B@@ABBB@@@B@B@BBB@@@@BB@B@@@B@@@B@BABAB@BA@@BA@@@@BA@A@@BAB@B@B@B@B@B@BBBB@@DDDBBDBBBBBBBBBB@@BB@@B@BBB@B@B@BAB@B@BABAD@BAB@B@BAB@B@D@B@BBB@B@BBB@@@B@B@B@B@B@BAD@B@B@B@D@@@B@B@B@B@B@B@B@B@BBB@B@BB@@BBBB@@B@BBBB@B@H@HTO@@@@@A@@BABA@@BA@A@@AA@A@@@ABA@@@A@@BAB@H@VEHCFELGFCHE@CFE@CHKVWRGLCDIBALIFGDANKDGB@VOFANCJAPAB@DEJGPGJCRCNCHGLMDAB@B@D@FAFCFEHENILGDEPIHEDGBAJEVQLAPGJIHCTODEDEHCRGRGNIDCHCDCBCDGFENKNKDEBA@KBGBCFOFG@IBE@CHM@GBGBCLKFMFGBKBENKB@TQ@AHGHKB@BA@@BCBCBA@A@A@C@ABCBCBA@E@E@ACA@@@AA@@ABCHIBCBCBEDELM@@BAB@BAFCDCDCBA@AB@BABEJGHCNBPBHFHBJ@J@HCJGDGDG@ICGCOAGAMAMGMMIAE@GAMAEACIEACFEFAFGFCDEDI@ECEWMUGSCICaUKGICMKGKAAGGOGICMEEMIMKEEBIDOBE@G@WC[GSOKGMCEBO@UEQIOGYOOAGBIBGEICC@K@IBEAEGCGIGKEKAG@@CLMAIEGCEAGFAJEDIF]BS@MDCHAJ@LAF@HBL@DA@CACACIKMUIQEY@GBKBIISKUQ[MOOMOIGIIcOMEEcOKEGCQEOGOM]I[G[GYI[SKQIOGeSaUQGQESCsWmQOE]GQEOIIE"],"encodeOffsets":[[80070,41383]]}},{"type":"Feature","id":"653024","properties":{"name":"乌恰县","cp":[75.259227,39.71931],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@KAYGUCE@O@MAABABEPMLIDMFMBO@I@SCECUIOICCCC@EAEEEEECC@@EIKKGEEKAEAEACAEACAA@A@@@@@@CAA@A@AAABABEFCFAD_KPOLUREBS@AI@gIQAE@EO@mFO@@BG@ECMEI@AEICEGDMFMB_@qLA@QDA@CA@SC@@@@ICMGAIEGAEAICCGGCC@A@E@E@ABGBGBGBG@@@ABA@CACAAAE@AAEBO@Y@C@AAA@AAC@@A@A@A@C@EAGAE@E@E@G@K@EBE@A@AB@BGJAB@@@@AACAABA@@BAB@BADCDABABEBG@A@AA@GA@A@KB@@AAAAACA@CBA@A@A@A@AA@WCK@AC@AAI@QBA@C@ECEAC@C@E@EBCDEBE@G@QAG@SBG@EAAAAG@KAC@CEEACA@[CA@@CDGBEBAFELMDEBC@A@ABIBEBEDAJCB@@AB@@CCAU[@GBGBGFKXi\\gLU@G@CIEQIIGACACEEGECCCC@CAEAAA@S@KEECCEAAAAC@GBIBA@GAEIEUCECC@ICEAICSAGAK@K@EBiDWBSBmH]HkBEJyLaBGBMDMNy^»AEHSBC@AC@WAUCMAKAKAG@SCaEO@A@AAGEGAIEICEAGAGCiWOKICGAM@C@A@IBODQDE@C@C@CCC@CA@@A@A@A@E@C@EBOFE@C@QDC@CDILCBCDEBE@C@A@A@G@C@A@EDEFCDCBEBIDE@IBA@E@C@KAMCE@@AA@@CAC@AAA@@AAGCE@GAIEGAK@WC@@AAAAC@AAA@GAE@@@C@C@CAGEQSISSoQ[KMAOBM@AFOACFIBEDCDABAFAFADAJAFAL@HADADCBEBEAKCGAAAAA@CDABG@EAIAA@SNGFG@E@MBA@@@A@K@EBA@@@IFA@@@EHEDC@MB@@@@KBSEICECEIA@EFG@G@GIA@EHKDKAMCE@@D@D@@CBG@A@ID@@MHADABEF@BBBDBB@JH@HADCLADCFBJHFFF@D@BAFGH@DADBF@HAF@BCDCBEFABIPADAFINAD@B@@@BB@FDBBBDBFAFADAD@BA@A@G@EAK@KBC@ABABABA@K@ABCBCFADEBCHAPCFADIBKDEBEDCDGJGPGFCBABADFFHJNNCDKAIAC@G@KDQ@KAEBI@EFCFIHERG@GAG@GB@DAFEFMBK@IAG@GBGDADCFCDKBCBI@OCGAI@CDGJGFKBCFAFGJICGCECG@KDUFIDKH@DAF@HADMAGAC@CBGLEDEDE@EAICSGG@GFIBI@EFCDEBIAKAEAG@GDABGDE@OIG@GHIFGB[BIDKJEBE@QGICGAOAKAIAKFMPADEHYTOHIDYAMAQGIIEAQBSBI@WEGFO@ICGBGBCBEFEDGBGAGCQDI@GBOHGNAHGHKAIAI@@FADBJ@JCFOJULEBWRSRCFMLEFWHE@@@KDCB@DCF@FBD@DBBMBC@I@CAECCAA@ECCAKAA@@ACAI@AAEAGAA@A@A@C@GCGCCAAAG@ABCBEHCDADCBCBCB@@A@C@CBEBCBCBEFGDCDAB@@GFCFCDAD@B@@ABEHCBCDCFEBEFCFCB@@ABGHAB@BABCHCF@B@D@BBBDFDF@B@BBD@B@B@@BFBF@B@BBB@BAF@B@BABABCBCBADYXMJIBABIAK@EAC@GAE@EAE@C@CAC@KCHDVFHBJRF\\JTPPLJCJOPBPLL`JPJJNCLATNHPBLAXDJPAZAFK\\MtIfADINBXATQXLD@DAFGDGDCPGJIFQDS@MDIJIHIBQ@EBSACBCVCZ@jD\\JdNTTPTRZLNFRFNHLNFNBNBTENMZ@HFPPNxxBH[JODODMF@DFJNJXBTHTBZPLHJLDVDLJTNPNHRFNBJCLCHALGLEHAZARDNBRHBJFLJJHF^BbFNDfHbFXHTBPCN@LDXDTBNEHEFOH[JCNDRNTFLAVObQHAR@LHRJVPVPNHNJRFNFVFTLRRPXLJJJNPRNTNLJLHRHPFVHHDFFLLLPHNLNNPPXHHJJLHJDRFJBPBXANCRGHCNANBTPXZDJJNLNFNDVENCTFDL@X@NBbBh@VBRAT@ZAR@ZEZMXK\\IL@ZBLJNHN@PFFLELGF[JKHONEFejSPzQRKJCJDJXDPN@DDNBLBLBNC\\BFHF\\ZP@VE`GTEXGbMTKVQHIdKZUTGZGTCRFNLNDHDLGXMXMXCRCRAXEVCL@HHDHj``EVCTCZEXEVE^@V@VBHPNVTHHLDNDBTAX@TNJPJRPLLHRP^RLHZLPDPH¤\\\\`JNNAVN@Rz\\f\\lfP`D^BLI@KPCNSLKXMSgB[F@S\\aBS@KRQNIPGTC\\ANGXOFAFAPEPKDMQMKMESOKogIWGM@S@QGQEQFU^QFKDIJUDCJYGUEQBCDGRCTHRFHJPNLEHBPFRJVKRDTJTHRLVTLDT_P@TARBN@LAVCVENGHGFICGBGDCBGEGCACG@KCEBICGEG@GJG@OAEEM@KEMBKGGKAIICEAAGGAI@GKGCKKGAMBCJIJEFMHILOFKFCFMFQJgBGFGB@HAFEFCDIDCBCBOCO@AAKHQAGPg@I@GBQ@GBGBGDE@E@AAAACAAAAACAAACCA@@@@@@AAAAACAAACAAACAACAACAAAA@A@AAAAC@@@@AAAAAC@@@@@@@AACAC@@@@@@@AAAAC@AAC@A@CAA@@AADEFEpWHCFCFEDGDKFCBC@A@ADCHERKHAFABA@ECAAGCEEI@E@MAECEEG@CBCROLK@A@A@@@A@@A@A@E@C@A@C@C@A@CAGC"],["@@@BDBBB@DBBBBBDBB@DDBBBBBBBBDDBBBBDBBBBFJPJ@D@@@BAH@BBL^P^NJDHBF@@@DG@@@@BABC@@JBPDF@BA@@@A@AGGAG@CBCDADEBAHKDGDEB@AU@aG@YCµ@sB"]],"encodeOffsets":[[[77781,40765]],[[77295,40122]]]}},{"type":"Feature","id":"653022","properties":{"name":"阿克陶县","cp":[75.947396,39.147785],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@IEEEGSEEIEIAIGUMOKQIEEGGACACE@GBI@I@EBEAK@QGKCSQIGIICAE@ABAB@H@HBDFJ@B@HCP@H@JETALAJAN@TAHAD@FBFFFBHDFFDHFDD@B@HAL@HFFDFJDHDBDDJFHNZFHJFPPFFBBFJDHAFEJOPEF@BDHHLBBJFPDLFHHPFJDFDFHDXELCDEDIFEDADAF@FB@DHBH@DADCDE@YHC@A@CEAACAC@C@IBC@AACEA@I@OBGDWFSHODIDI@EACC@CAEGCAC@CF[BCBAD@D@BA@AEEGGEEQCQAEAAA@E@AAA@@C@C@CDGHMHEFADA@C@A@IEOGC@Q@C@AAAAECICAAC@A@CDEBC@A@AAAECEIKEGE@EBADQBKBGBGBCD@F@FA@GDGBI@KBIBADEFGFEBKBIBOFMHEDWJIDG@KAIAGBGDEFIDK@ECGCMCG@C@A@AB@J@BABC@YFIDG@I@C@CBEDA@C@GCMGCAC@C@GAC@KGA@EBCBE@E@CAC@EEAAA@BFBH@BDF@B@DBDBFBD@@ANADADB@BDBF@BBH@@AB@D@BBDBFBBBB@D@BAD@FABABCDAB@BAB@D@F@DADAB@BBBCDKJADAFAJCHGLAD@BEFCBADABAFAF@F@B@B@D@BBBDH@@CFAB@F@J@F@BAB@B@BBDBB@B@BABAFBDAD@D@B@BHJ@BFDDDFFBD@B@D@B@D@@CDCBCDA@@@ACCAA@A@@BILADGBG@IDGDCDCFIHGFOPSRUPQRYRKLQRSROHIBGDEAQEQAIAWAWCOAICK@C@KDKDKFKFMJIHGJKHKLIFMTIRMNCL@LCHIBEA[CyE[EOCECQKMKECQAG@KAC@@@A@AACACCCAA@CAE@G@CBEDAFCDGBMDKHA@KHEJCHAHGBEAI@GBGBI@KAKCIAIEGCKBKDOHMBE@MDKCG@IAIBKBMDOFQDGF@@IXGRENGLCLBPPTb^RNTEDLPNJHLPJPTVHXCRCVGR@X@ZC`KNUFOEO@Q@EJGPAPKRINMJGHOFQCS@O@[EOBMDYLQN]VYVYRYT_T[FOEIKI@WLaJO@MDK@YDSTYXUNOBSA[CgCOBWJOJ]J[BWDeHYBU@[A{EeFmDi@gA}LUFUFWDOJUFIEIGIQQYEqESKEqAQYUYPcJOFMDKHIS@{@UAK@UEW[WAWNSDW@]B_BUBQFIJGTCNCPKVIDYEWDcJSHKFYJSNQJA@IFABAD@DDJPLDPGPEPELEFEJWPGNEXCXETOJIF@P@TBHDbRRDJCJMPMTOdOPIFEJEVIHUHKJOPBTRtPPHBJ@FBBDANPXLVFBX@HBLJP@FENEVGZDJCLYPCJNTZFVD`@TEZAbCNWVGVCJENGDK@[AG@GCEUIEYA[BWFAPCVS`SPCRDxEHGJEZEFQBEFE`GFaESJIT@fIHOHCVGbUVKHYH[C_BKHCPAPGJEHUDWDEDDJLPJLFLENINALH\\JVBLCHcX}fGFBFbDXBlJbNXLVLJPFTF`BPNZZHXFXB\\CXGfC|AtEH\\D~BDBBBZBPDJFLDD@DBD@F@FBF@HBD@FBL@JBBAJANIZWBCDADABABA@A@ABE@AAA@A@AAEAE@@@A@AAC@A@ACECEAA@A@C@ADEDGBA@ABAHGBA@@DADEFEFADEDCDAFGBA@@@ABCDCDEHE@@BADCHCFEDADAFADAD@B@@@DADADABCDCFGDABAH@BBDBHDHDD@B@B@B@HBFBBBJ@DB@BB@LBDBFDB@DBFDDBJ@D@NAAA@CAC@EDE@CDALC@@F@XGFENKDETQXQFAVKPIDE@IAIBC@EJ@JBLBHGBGHMPGHAJ@RCHDHBHAFCFEDAHAHAJDP@HEXFJ@TARAFBJJRHNBZBJCPGZSFGBCNOLEJBLBPBHBJDRHF@FALIJC\\AHAJEHGH@PJF@HCBAHCH@FBLBJBFADCFEJ@JAHEH@THJDFBF@FCFCHKDAD@HBNBBC@GBE@CLGJCVELCH@FDHDJDHIBEDELAHEHIDCJ@HBPDJ@DALADCDEBCHCHAH@JBL@NAFEBE@CHAH@HBH@FQJGDEFEJ@FALBR@LCH@D@JBLBDCMMGIEEBCBADAHEHOHIDCFCFALCJABCDEBODGFABCDEDABAL@B@BABABAD@LAL@FBH@B@B@@ABCBCBEAEACAAECA@@A@@@ABCJMBEBCJOBAFEDADC@ABE@GAEBC@CHGBE@A@CEEGEAIDEBCDKBC@GIGA@CAAA@AFEBABCNG@@JCB@H@DA@@@C@CF@NDLBLCFGB@HJH@H@FEB@FJFDJDTFLA@@@@NAD@FCFG@@B@JE@@B@FAL@B@@@B@NAF@H@HETMB@JBFBH@BADCB@BBBBDHBLAFAFCDCBGBK@EBIBCBEBEBABCBCDAFEJBDEP@BANBPLNR\\TpJTRTHFDBD@D@@@F@HBB@BBD@BBBB@@XDL@HBJFHBF@HDBB@@BB@BBD@DB@@BF@NDLBD@F@B@JAF@JCFADADCFEFCB@D@H@B@B@D@F@FADCDAJKDCD@RCD@F@PEFAD@F@B@B@B@@@DBD@DDD@D@F@RCPCJAB@D@N@HBJDPLjXHDHBFBJDJFHBHFBBB@P@bFTDH@LBLBNBVDXBD@@BADGTBFDBFBD@D@D@D@L@H@D@D@DBB@@@D@DBD@D@DBD@D@D@D@D@DBD@BBD@D@DBD@DBD@DBB@DBDBD@BBDBBBD@D@D@D@BBD@DBB@DBD@D@DBD@DBD@DBB@DBDBD@BBDBDBB@DBDBBBBBDBBBBDBBBBBDtA¶@ZDH@@bBVFBX\\RP\\Z^\\HTFN@D@H@B@B@B@BBBD@B@FBB@BD@B@@B@@@@ABEBA@@B@B@@@BBBB@D@BBBDBDBB@B@B@B@@@FA@@@@@@@B@B@B@@@BB@@@B@DAB@B@@@@B@@A@@B@@@B@BD@@@BBDBD@D@BBDB@@DBDBB@B@DC@@B@@@@@@BBBDBD@BBB@B@@@@AB@@@B@BBDAB@@@BAAE@@BA@AB@B@B@BBBB@B@@B@@@BA@@@@B@@@@@BB@@@BB@@BB@@@BAB@@@B@@@@@B@BD@@BBB@@@@AB@@AA@@A@AB@BAB@DBB@B@@@BC@@@@@AB@@@@A@@B@BBB@@BBB@@@@BBB@D@FBD@DAB@B@DABABAB@@A@@@@@@@@@@@@C@A@A@IAI@A@CA@@@@E@A@A@C@CAACC@CA@@A@CBC@@@A@@@@@@A@@AAAA@AAAA@GEEAKCGEA@AAGC@@MEGC@AAA@@@C@EACG[@AAE@@@C@CAGAGAA@GEOSQIKKOaoGGCGMO[cCGAECECCCIEICEAA@GKYAIAEAG@SBU@MBI@KAGCKEQOaAE@C@CAAGGAECC@EEEICCAACAADGDGJKFADAJ@P@H@T@HBD@FADALADAFADCDCFCFCDCD@B@F@FDLLBBH@H@HADAD@BCDEDC@ABAB@B@@@DBBBDBBBDBDDB@BBFBFBFDB@B@D@B@@B@BADAB@@BB@@F@B@BBBDB@B@@@BAB@@A@@@AB@@@F@BAB@BABCB@@AB@BBB@D@B@@BBB@B@@@D@BA@AB@B@@@BBBB@B@@@BB@BB@@BBAB@@BB@FDBBB@BBHBB@BB@BB@@@B@BBD@F@D@D@BBBD@BD@F@B@DBD@@BDD@F@B@B@BAB@B@@BBNLBBBBA@AH@B@BAFAD@DBDFFBB@D@DCHADAB@D@F@DDN@DBF@FDH@BBFADABEDGDGDCDADAD@@DDLFXH@@@DGFIFIBS@OBI@IBEBADABGHKLGFEBCBAB@@BBJDBBZHNHFDBBB@DDDDDDDFBBHLDHHLLTBDFJDHDD@BDBF@BBBA@@HCNCD@D@RBH@F@JCFAD@TBL@JBFDBDDFB@NFDF@D@DAFAD@@ADCDEDABCBA@CBC@@@A@@@A@BBBDFFPLJFBDAFCH@@AD@@@@@BB@HHPLFFTRHHDA@@BBCDED[\\AD@B@@@@B@RDPBJBB@B@BAB@PO@@BA@A@@EE@@B@DC@ALG@@BADCD@DAD@F@N@RDLDNBH@H@B@DADCB@@@B@B@B@@@DAD@BADABA@@@@D@D@D@JELEB@B@FB@@B@BAFA@@FDHDB@D@DAFAJKFGBAFCFAHCH@PEFADADADAB@D@F@DAD@DBHD@@B@@ABCDA@@D@B@D@DBN@F@FAXIJCN@B@FAD@LBB@DA@@B@D@H@D@B@FBJDD@F@H@DAFCBA@CAA@@@A@ABCDC@A@AAC@@AAAEEEGGGEKEUCSCICWEEAE@EA@AAE@AAAGCCAA@A@ACAKC@EAY@CB@@@B@@@@HDPD@B@B@BC@K@GBG@G@E@E@CAACAE@AACCAC@@A@@@A@@@@BADBJAF@B@BACCAEBMHGPOTSB@HGJIZUDEDCDALOB@NKTUNMAEAM@IBGFGHGBADG@EBGGAIAIA@@@@@@C@AA@@ACAAA@AACAC@AACCA@ECQGECECUKGAEAMAMAG@I@oAMBMDA@I@K@A@GAMEQAKBU@KDA@KAE@M@M@A@ABCDCFER@PAJAH@BA@A@AAIAC@A@EEMKAA@@CAC@EAGACAEACAGICCC@ECCC@@@@CAICAA@AA@AC@AA@AAAAAA@@A@CEA@ICGACAC@C@A@@@C@CAE@GACAA@CACACCCAA@EAAAEECCECCAA@A@EAA@A@AAEEA@GAEACCEECCECA@CAEACA@@CAECECAAA@A@AAA@AAAA@@DCXGFAtQ~Y¸jWXUNUDGHUBWBBDCBACEAAN@BAEEAIBIAE@@D@FAF@DADABABC@IFEDAFAFBB@DBDFHFBB@B@@B@@@B@BABIDIDIDK@G@ACMIG@C@AB@FBNB@@JDNBJBJ@N@BAIEEE@@BABCDAJ@@@H@JBJADABEEICI@EDEDEFCD@JBHDHDD@DCACEG@CDEDCHEJCDADCBEBEBCFEXKFGFAFAHCJABAFANKJKFCHIHOBAFALAN@D@JAJEHEDCACACACA@@AAC@@GUEG@@AEAG@I@A@@@@BCBCFAF@F@PFLDLDH@NCH@LBP@J@V@VBJABBH@HFDFLFLDPFTBHDF@H@BADADCB@BAFA\\@RBL@DADCLWDGFAJCHANAN@HBH@B@bDTDJBFADABC@G@EE}KWAA@EBGBC@C@AAACCMIOGYGOCICGCEACCIWCI@ABCDAHCXIVCTEJ@F@RFVHHFFBB@zDR@JAVG^IJEDADEBCFAH@XGTIRI^MVMRILGp_DCJKDGBKEQCo@gE½@M@I@EBc@_@MBS@WCOOSGKS]WcY_GIA@OYMmDWJiBU@GCCICGIGOAE@EFK@A@CCEIGIGCCCAACAC@I@EAGACBA@A@ABA@@@@@AAC@AAIAEBG@ABA@AB@@AAA@@@AA@@AC@E@@@AACCACAEBC@ABE@C@AAACAGAAACE@GCCKEUQEE@CBEDC@@DC@ABA@AMI@ABEPSDEDEBE@CECCM@CBCDCPEFCDCBI@GEEQGMA]AQDWHGDQLEFGBADCFCHEDC@EAGGMCI@G@EAAABCDGBCBOAIAGACAC@EAICIECMEKAGASAMCUAM@A@EECE@@GCAAAAAC@KBGBABCAIGIM_CGGOCIEICGCK@AM@GBIAE@CACAACC@A@ABAB@B@PEFEDCFEBEDCBEFCJCD@D@DCDEDIP@DABAB@@C@A@A@EBEDABAB@BFFDDBF@HADABCBG@ABADAD@HCBE@OCIAECCIGMECGCICMKKGIEI@GBIBK@CAICMMG@G@CAC@C@KBI@GCCEEGEAGAEACCOKICEAOEECEAGAKCKGIEC@E@IBKDGDEBE@]MCCI@GDGDSEEAG@G@EBKDIBKGA@"],"encodeOffsets":[[77757,38635]]}}],"UTF8Encoding":true});}));