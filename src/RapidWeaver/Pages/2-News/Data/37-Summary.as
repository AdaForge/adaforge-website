bplist00?        
X$versionY$archiverT$topX$objects ??_NSKeyedArchiver?  	Troot??7      ' ( ) 3 B F L Q U X \ ` d h l p t x | ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?U$null?        XNSString_NSAttributeInfo\NSAttributesV$class??4??6oH D e e p e n d   i s   a   s e t   o f   s t o r a g e   p o o l s   f o r   A d a   9 5 ,   A d a   2 0 0 5 ,   a n d   A d a   2 0 1 2   t h a t   i n c l u d e s   s u b p o o l   c a p a b i l i t i e s .   G r o u p s   o f   m e m o r y   a l l o c a t i o n s   f r o m   a   s t o r a g e   p o o l   c a n   b e   a s s i g n e d   t o   s p e c i f i c   s u b p o o l s   w h e r e   g r o u p s   o f   o b j e c t s   c a n   b e     d e a l l o c a t e d   a s   a   g r o u p   b y   d e a l l o c a t i n g   t h e   s u b p o o l ,   r a t h e r   t h a n   b y   i n d i v i d u a l   d e a l l o c a t i o n s   o f   o b j e c t s . 
 
 E a c h   s u b p o o l   i s   " o w n e d "   b y   a   s p e c i f i c   t a s k   i n   A d a ,   a l l o w i n g   a l l o c a t i o n s   a n d   d e a l l o c a t i o n s   t o   b e   e f f i c i e n t ,   a s   w e l l   a s   b e i n g   s a f e r   a n d   l e s s   e r r o r   p r o n e . 
 
 S i n c e   v e r s i o n   3 . 4 ,   t h e   m o s t   n o t a b l e   c h a n g e s   a r e : 
 	 " 	 A d a   2 0 1 2   s u b p o o l s   w e r e   n o t   w o r k i n g   i n   v e r s i o n   3 . 4 ,   b u t   n o w   w o r k   p r o p e r l y   w i t h   t h e   A d a   2 0 1 2   s u b p o o l   s y n t a x . 
 	 " 	 I t   i s   n o w   p o s s i b l e   t o   s e t   t a s k   o w n e r s h i p   o f   t h e   s t o r a g e   p o o l   i t s e l f ,   a s       w e l l   a s   s u b p o o l s . 
 	 " 	 P o r t a b i l i t y   c h a n g e s   m a d e   t o   i n t e g r a t e   w i t h   P T C ' s   O b j e c t A d a   6 4 b i t   c o m p i l e r     f o r   A d a   2 0 0 5   a n d   A d a   9 5 
 	 " 	 P o r t a b i l i t y   c h a n g e s   m a d e   t o   i n t e g r a t e   w i t h   R R   S o f t w a r e ' s   J a n u s   A d a   c o m p i l e r   f o r   A d a   9 5 
 	 " 	 M e m o r y   a l l o c a t i o n s   r e t u r n e d   b y   t h e   g e n e r i c   a l l o c a t o r s   w e r e   n o t   i n i t i a l i z i n g   m e m o r y .   T h i s   i s   i m p o r t a n t   f o r   t y p e s   t h a t   h a v e   d i s c r i m i n a n t s   o r   t a g s .   N o w   m e m o r y   i s   i n i t i a l i s e d   w h i c h   i s   c o n s i s t e n t   w i t h   b e h a v i o u r   w h e n   o n e   u s e s   A d a ' s   " n e w "   k e y w o r d   s y n t a x   t o   p r o v i d e   t h e   a l l o c a t i o n s . 
 	 " 	 T h e   g e n e r i c   a l l o c a t o r   r o u t i n e s   n o w   s u p p o r t   a l l o c a t i n g   u n c o n s t r a i n e d   t y p e s ,   s u c h   a s   s t r i n g s . 
 
 T h e r e   a r e   4   d i f f e r e n t   s t o r a g e   p o o l s   t o   c h o o s e   f r o m ; 
 	 " 	 U n b o u n d e d   s t o r a g e   p o o l   w i t h   s u b p o o l   s u p p o r t 
 	 " 	 B o u n d e d   s t o r a g e   p o o l   w i t h   s u b p o o l   s u p p o r t 
 	 " 	 U n b o u n d e d   s t o r a g e   p o o l   w i t h o u t   s u b p o o l   s u p p o r t 
 	 " 	 B o u n d e d   s t o r a g e   p o o l   w i t h o u t   s u b p o o l   s u p p o r t 
 
 h t t p s : / / s o u r c e f o r g e . n e t / p r o j e c t s / d e e p e n d / f i l e s / 
 
 F r o m   B r a d   M o o r e?    ZNS.objects?    ???'?,?3?      # &WNS.keys? ! "??? $ %???_NSParagraphStyleVNSFont? *  + , - . / 0 1 2ZNSTabStops_NSMinLineHeight_NSAllowsTighteningForTruncation[NSTextLists??#@,      ??   4 A? 5 6 7 8 9 : ; < = > ? @?	?????????????  C D EZNSLocation?
#@<      ? G H I JZ$classnameX$classesYNSTextTab? I KXNSObject? M  C N D P\NSTabOptions??
#@L      ?    R S &???? G H V W\NSDictionary? V K? M  C N D [??
#@U      ? M  C N D _??
#@\      ? M  C N D c??
#@a?     ? M  C N D g??
#@e      ? M  C N D k??
#@h?     ? M  C N D o??
#@l      ? M  C N D s??
#@o?     ? M  C N D w??
#@q?     ? M  C N D {??
#@s@     ? M  C N D ??
#@u      ? G H ? ?WNSArray? ? K?   ? A??? G H ? ?_NSMutableParagraphStyle? ? ? K_NSParagraphStyle? ? ? ?  ? ? ? ?VNSSizeXNSfFlagsVNSName#@(      ??YHelvetica? G H ? ?VNSFont? ? K?    ? ? &? ! "??? ? %???? *  + ? , - ? / 0 ? 1 ?\NSHeadIndent? ?#@B      ?#?   ? A? ? ? 6 7 8 9 : ; < = > ? @?!?"?????????????  C D ??
#@&      ?  M ? C D N ? ?_NSTextAlignment?
??   ? A? ??$??  ? ? ?^NSMarkerFormat?&?%V{disc}? G H ? ?ZNSTextList? ? KZNSTextList?    ? ? &? ! "??? ? %?(??? *  + ? , - ? / 0 ? 1 Ԁ)??*?   ? A? ? ? 6 7 8 9 : ; < = > ? @?!?"?????????????   ? A? ??+??  ? ? À&?%?    ? ? &? ? ! "?-??? ? ? %?.?1??VNSLink? ?  ? ? ? ?WNS.base[NS.relative? ?0?/_/https://sourceforge.net/projects/deepend/files/? G H ? UNSURL? ? K? *  + , - / 0 1 2?2???   A? 5 6 7 8 9 : ; < = > ? @?	????????????? G H^NSMutableArray? ? K? WNS.dataO? ?5 ? / ?5? G H]NSMutableData? KVNSData? G H !_NSAttributedString?" K_NSAttributedString   " , 1 : ? Q V [ ] ? ? ? ? ????????????????? /:Lnz|~????????????????????????(579BOPQS\in{}???????????????????
$135>KMOXegir{?????????????"'49;=BDFHanpr{}????????????????????????
"$&-6AFQ^ceglnpr????????????????????????????+3?ACEw????????????????????????
&(1?FMVkp            #              ?