bplist00?
X$versionY$archiverT$topX$objects ??_NSKeyedArchiver?	Troot??$%-.47?@HKUVWXfpqrstux{??U$null?XNSString_NSAttributeInfo\NSAttributesV$class????_?The first two were relatively straight-forward.  

Bits were sort of already supported but inconsistently and sometimes as strings.  Now they are an array of bits for easy manipulation.

AdaBase tries to be smart with regard to encoding.
It forces the server to send text strings encoded as UTF8 and stores it natively and decodes them to strings/w/ws/ as necesary.

The support for MySQL spatial data types and the PostGIS extension for PostgreSQL took far longer than I anticipated.  The result is pretty good,
I think, it allows AdaBase to directly query geometry fields without the use of database server-side functions to convert and extract.  It reads the
internal format of MySQL and PostGIS directly and converts them to Well Known Binary (WKB) which can be used to construct AdaBase Geometry objects and
also into Well Known Text.  This eliminates a lot of overhead as point data can be directly used immediately after a simple query that pulls
raw column data.

I wrote a pretty log documentation page with two separate test cases to show geometry data extraction and the geometry data construction and
insertion.  I don't know if anybody needs this feature, but I have a feeling there aren't a lot of database API packages that can handle GIS
data like this.
?ZNS.objects???
???!#WNS.keys? ??"??	VNSFont?&'()*+,VNSSizeXNSfFlagsVNSName#@(      ??YHelvetica?/012Z$classnameX$classesVNSFont?13XNSObject?/056\NSDictionary?53?8;#?9 ???<"???	_NSParagraphStyle?ABCDEFGZNSTabStops[NSAlignment_NSAllowsTighteningForTruncation? ??/0IJ_NSParagraphStyle?I3?LP#?MN ????QR"????	YNSToolTipVNSLink_0https://jrmarino.github.io/AdaBase/geometry.html?YZ[\]^D`abcDDVanchorUassetXinternalZattributesTnameYsubpageID? ? ?? ? ?gko?hij????lQn????VtargetThrefSrelPXexternal?/0vw_NSMutableDictionary?v53?/0yzVRWLink?y3?/0|}^NSMutableArray?|~3WNSArrayҀ??WNS.dataO2 ? ? ? ??/0??]NSMutableData???3VNSData?/0??_NSAttributedString??3_NSAttributedString    $ ) 2 7 I L Q S u { ? ? ? ? ? ? ? ? ??????????????????
 */:CJMV[hkruwy|~??????????????	!([jqw?????????????????????????????	 $,19MOTbfmr??             ?              ?