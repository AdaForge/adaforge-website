bplist00?
X$versionY$archiverT$topX$objects ??_NSKeyedArchiver?	Troot?? *9=CHLOSW[_cgkoswz}????U$null?XNSStringV$class\NSAttributes???_<Thanks to Daniel for alerting me to the fact that the Ravenscar examples were no longer compiling.
Those examples were no longer compiling with the GNAT GPL 2015 version of the compiler. The compilations were failing due to violations of the Ravenscar
restrictions, No_Protected_Type_Allocators and No_Local_Protected_Objects.

I believe these are valid restrictions that just were not being caught in earlier versions of the compiler. The problem is that the Stream Buffer has an
internal record component that is an internal buffer implemented as a protected type.

To address these restrictions, I had to pull out the internal buffer declaration, and instead have the programmer declare this separately, then on the Stream Buffer declaration, have the programmer reference the "internal" buffer via an access discriminant.


?WNS.keysZNS.objects???????_NSParagraphStyleVNSFont?!"#$%&'()ZNSTabStops_NSMinLineHeight_NSAllowsTighteningForTruncation[NSTextLists??#@,      ??+8?,-./01234567??
????????????:;<ZNSLocation?	#@<      ?>?@AZ$classnameX$classesYNSTextTab?@BXNSObject?D:E;G\NSTabOptions??	#@L      ?IJ????>?MN\NSDictionary?MB?D:E;R??	#@U      ?D:E;V??	#@\      ?D:E;Z??	#@a?     ?D:E;^??	#@e      ?D:E;b??	#@h?     ?D:E;f??	#@l      ?D:E;j??	#@o?     ?D:E;n??	#@q?     ?D:E;r??	#@s@     ?D:E;v??	#@u      ?>?xyWNSArray?xB?{8???>?~_NSMutableParagraphStyle?~?B_NSParagraphStyleԂ??????VNSSizeXNSfFlagsVNSName#@(      ??YHelvetica?>???VNSFont??B?>???_NSAttributedString??B_NSAttributedString    $ ) 2 7 I L Q S t z ? ? ? ? ? ? ?????
!(3>Pr~?????????????????????????????&-./16CFMOQZacenuwy?????????????????????????#$&+EI\elu|???????????             ?              ?