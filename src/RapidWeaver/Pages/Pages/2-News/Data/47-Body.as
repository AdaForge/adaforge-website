bplist00�
X$versionY$archiverT$topX$objects ��_NSKeyedArchiver�	Troot��%&'/5=>ADRSTUV^_`abehmptx|U$null�XNSString_NSAttributeInfo\NSAttributesV$class����_~The expressions handled by SymExpr have the usual form with the four operations (+, -, * and /), the two unary operators (+ and -),
function calls, variables and parenthesis. The package is a generic package parameterized by the type of the "values" used in the expressions (called "scalars" in the code), so you can have expressions of floats, of integers, but also of dates (my case), complexes, and so on...

  *  You can create new expressions by parsing strings

         X := Parse("foo+(bar-3)*max(bar, foo)")

  *  You can build expressions using constructors and operators, for 
     example  

         X := Variable("x");
         Y := X*X - 2*X + 1;

  *  You can replace variables with scalars or other expressions, for
     example, 

         -- Replace every occurence of "x" in Y with 42
         U := Replace(Y, "x", 42); 

         -- Makes V equal to (X*X)*(X*X) - 2*(X*X) + 1
         V := Replace(Y, "x", X*X);

  *  You can evaluate an expression without variables to a scalar.
     For example, to plot a graph of Y you could use

         for I in -10..10 loop
           Plot(I, Eval(Replace(Y, "x", I)));
         end loop;�ZNS.objects�����!$WNS.keys� ���"#��	�_NSParagraphStyleVNSFont�()*+,-.ZNSTabStops[NSAlignment_NSAllowsTighteningForTruncation� ��0123Z$classnameX$classes_NSParagraphStyle�24XNSObject�6789:;<VNSSizeXNSfFlagsVNSName#@(      �
�YHelvetica�01?@VNSFont�?4�01BC\NSDictionary�B4�EK$�F HJ������L#NOP��	����YNSToolTip_$kRWTextViewMarkupDirectivesAttribute_NSBackgroundColorP�WZ]�XY���[\���StagTnameTcode_HTMLFormatMenuCode�01cd_NSMutableDictionary�cB4�()*+,-.� ��ijk-lUNSRGB\NSColorSpaceO0.8399999738 1 0.8299999833 ��01noWNSColor�n4�01qr^NSMutableArray�qs4WNSArray�uvwWNS.dataO� 1W :W \ [z _��01yz]NSMutableData�y{4VNSData�01}~_NSAttributedString�4_NSAttributedString    $ ) 2 7 I L Q S u { � � � � � � � � �=BMPRTV]ehjloqsu�������������!*1:<>@JOVY^knu{}������������������������26?ACJP]|~����������������             �              %