;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
// Predefined Ada 2012 Keywords
var ada2012_keywords =
'abort abs abstract accept access aliased all and array at ' +
'begin body case constant declare delay delta digits do else elsif ' +
'end entry exception exit for function generic goto if in ' +
'interface is limited loop mod new not null of or others ' +
'out overriding package pragma private procedure protected raise range record rem ' +
'renames requeue return reverse select separate some subtype synchronized tagged task ' +
'terminate then type until use when while with xor';

// Predefined Ada 2012 Aspects
var ada2012_aspects =
'Address|Alignment|All_Calls_Remote|Asynchronous|Atomic|Atomic_Components|Attach_Handler|Bit_Order|Coding|Component_Size|' +
'Constant_Indexing|Convention|CPU|Default_Component_Value|Default_Iterator|Default_Storage_Pool|Default_Value|Dispatching_Domain|Dynamic_Predicate|Elaborate_Body|' +
'Export|External_Name|External_Tag|Implicit_Dereference|Import|Independent|Independent_Components|Inline|Input|Interrupt_Handler|' +
'Interrupt_Priority|Iterator_Element|Layout|Link_Name|Machine_Radix|No_Return|Output|Pack|Post|Pre|' +
'Preelaborate|Priority|Pure|Read|Recordlayout|Relative_Deadline|Remote_Call_Interface|Remote_Types|Shared_Passive|Size|' +
'Small|Static_Predicate|Storage_Pool|Storage_Size|Stream_Size|Synchronization|Type_Invariant|Unchecked_Union|Variable_Indexing|Volatile|' +
'Volatile_Components|Write';


// Predefined Ada 2012 Attributes
var ada2012_attributes =
'Access|Address|Adjacent|Aft|Alignment|Base|Bit_Order|Body_Version|Callable|Caller|' +
'Ceiling|Class|Component_Size|Compose|Constrained|Copy_Sign|Count|Definite|Delta|Denorm|' +
'Digits|Exponent|External_Tag|First|First_Bit|First_Valid|Floor|Fore|Fraction|Has_Same_Storage|' +
'Identity|Image|Input|Last|Last_Bit|Last_Valid|Leading_Part|Length|Machine|Machine_Emax|' +
'Machine_Emin|Machine_Mantissa|Machine_Overflows|Machine_Radix|Machine_Rounding|Machine_Rounds|Max|Max_Alignment_For_Allocation|Max_Size_In_Storage_Elements|Min|' +
'Mod|Model|Model_Emin|Model_Epsilon|Model_Mantissa|Model_Small|Modulus|Old|Output|Overlaps_Storage|Partition_Id|' +
'Pos|Position|Pred|Priority|Range|Read|Remainder|Result|Round|Rounding|Safe_First|' +
'Safe_Last|Scale|Scaling|Signed_Zeros|Size|Small|Storage_Pool|Storage_Size|Stream_Size|Succ|' +
'Tag|Terminated|Truncation|Unbiased_Rounding|Unchecked_Access|Val|Valid|Value|Version|Wide_Image|' +
'Wide_Value|Wide_Wide_Image|Wide_Wide_Value|Wide_Wide_Width|Wide_Width|Width|Write';


// Predefined Ada 2012 pragmas
var ada2012_pragmas =
'All_Calls_Remote|Assert|Assertion_Policy|Assertion_Policy|Asynchronous|Atomic|Atomic_Components|Attach_Handler|Convention|CPU|' +
'Default_Storage_Pool|Detect_Blocking|Discard_Names|Dispatching_Domain|Elaborate_All|Elaborate_Body|Elaborate|Export|Import|Independent|' +
'Independent_Components|Inline|Inspection_Point|Interrupt_Handler|Interrupt_Priority|Linker_Options|List|Locking_Policy|No_Return|Normalize_Scalars|' +
'Optimize|Pack|Page|Partition_Elaboration_Policy|Preelaborable_Initialization|Preelaborate|Priority|Priority_Specific_Dispatching|Profile|Pure|' +
'Queuing_Policy|Relative_Deadline|Remote_Call_Interface|Remote_Types|Restrictions|Reviewable|Shared_Passive|Storage_Size|Suppress|Task_Dispatching_Policy|' +
'Unchecked_Union|Unsuppress|Volatile|Volatile_Components';

// Predefined Ada 2012 Exceptions
var ada2012_exceptions =
'Argument_Error Assertion_Error Capacity_Error Communication_Error Constraint_Error Conversion_Error Data_Error Device_Error Dispatching_Domain_Error Dispatching_Policy_Error Encoding_Error ' +
'End_Error Group_Budget_Error Index_Error Layout_Error Length_Error Mode_Error Name_Error Pattern_Error Picture_Error Pointer_Error ' +
'Program_Error Status_Error Storage_Error Tag_Error Tasking_Error Terminator_Error Time_Error Timer_Resource_Error Translation_Error Unknown_Zone_Error ' +
'Use_Error';

// Predefined Ada 2012 Restrictions
var ada2012_restrictions =
'Immediate_Reclamation Max_Asynchronous_Select_Nesting Max_Entry_Queue_Length Max_Protected_Entries Max_Select_Alternatives Max_Storage_At_Blocking Max_Task_Entries Max_Tasks No_Abort_Statements No_Access_Parameter_Allocators' +
'No_Access_Subprograms No_Allocators No_Anonymous_Allocators No_Asynchronous_Control No_Coextensions No_Delay No_Dependence No_Dispatch No_Dynamic_Attachment No_Dynamic_Priorities' +
'No_Exceptions No_Fixed_Point No_Floating_Point No_Implementation_Aspect_Specifications No_Implementation_Attributes No_Implementation_Identifiers No_Implementation_Pragmas No_Implementation_Units No_Implicit_Heap_Allocations No_IO' +
'No_Local_Allocators No_Local_Protected_Objects No_Local_Timing_Events No_Nested_Finalization No_Obsolescent_Features No_Protected_Type_Allocators No_Protected_Types No_Recursion No_Reentrancy No_Relative_Delay' +
'No_Requeue_Statements No_Select_Statements No_Specific_Termination_Handlers No_Specification_of_Aspect No_Standard_Allocators_After_Elaboration No_Task_Allocators No_Task_Hierarchy No_Task_Termination No_Terminate_Alternatives No_Unchecked_Access' +
'No_Unchecked_Conversion No_Unchecked_Deallocation No_Use_Of_Attribute No_Use_Of_Pragma Simple_Barriers';


// Predefined Ada 2012 Packages
var ada2012_packages =
'System.Storage_Pools.Subpools System.Storage_Pools System.Storage_Elements System.RPC System.Multiprocessors.Dispatching_Domains System.Multiprocessors System.Machine_Code System.Address_To_Access_Conversions System Standard.ASCII' +
'Standard Interfaces.Fortran.Single_Precision_Complex_Types Interfaces.Fortran Interfaces.COBOL.Decimal_Conversions Interfaces.COBOL Interfaces.C.Strings Interfaces.C.Pointers Interfaces.C Interfaces Float_IO' +
'Ada.Wide_Wide_Text_IO.Unbounded_IO Ada.Wide_Wide_Text_IO.Text_Streams Ada.Wide_Wide_Text_IO.Editing Ada.Wide_Wide_Text_IO.Complex_IO Ada.Wide_Wide_Text_IO.Bounded_IO Ada.Wide_Wide_Text_IO Ada.Wide_Wide_Characters.Handling Ada.Wide_Wide_Characters Ada.Wide_Text_IO.Unbounded_IO Ada.Wide_Text_IO.Text_Streams' +
'Ada.Wide_Text_IO.Editing Ada.Wide_Text_IO.Complex_IO Ada.Wide_Text_IO.Bounded_IO Ada.Wide_Text_IO Ada.Wide_Characters.Handling Ada.Wide_Characters Ada.Text_IO.Unbounded_IO Ada.Text_IO.Text_Streams Ada.Text_IO.Modular_IO Ada.Text_IO.Integer_IO' +
'Ada.Text_IO.Fixed_IO Ada.Text_IO.Enumeration_IO Ada.Text_IO.Editing.Decimal_Output Ada.Text_IO.Editing Ada.Text_IO.Decimal_IO Ada.Text_IO.Complex_IO Ada.Text_IO.Bounded_IO Ada.Text_IO.Ada.Calendar.Formatting Ada.Text_IO Ada.Task_Termination' +
'Ada.Task_Identification Ada.Task_Attributes Ada.Tags.Generic_Dispatching_Constructor Ada.Tags Ada.Synchronous_Task_Control.EDF Ada.Synchronous_Task_Control Ada.Synchronous_Barriers Ada.Strings.Wide_Wide_Unbounded Ada.Strings.Wide_Wide_Maps.Wide_Wide_Constants Ada.Strings.Wide_Wide_Maps' +
'Ada.Strings.Wide_Wide_Hash_Case_Insensitive Ada.Strings.Wide_Wide_Hash Ada.Strings.Wide_Wide_Fixed Ada.Strings.Wide_Wide_Equal_Case_Insensitive Ada.Strings.Wide_Wide_Bounded Ada.Strings.Wide_Unbounded Ada.Strings.Wide_Maps.Wide_Constants Ada.Strings.Wide_Maps Ada.Strings.Wide_Hash_Case_Insensitive Ada.Strings.Wide_Hash' +
'Ada.Strings.Wide_Fixed Ada.Strings.Wide_Equal_Case_Insensitive Ada.Strings.Wide_Bounded Ada.Strings.UTF_Encoding.Wide_Wide_Strings Ada.Strings.UTF_Encoding.Wide_Strings Ada.Strings.UTF_Encoding.Strings Ada.Strings.UTF_Encoding.Conversions Ada.Strings.UTF_Encoding Ada.Strings.Unbounded Ada.Strings.Maps.Constants' +
'Ada.Strings.Maps Ada.Strings.Fixed Ada.Strings.Bounded.Generic_Bounded_Length Ada.Strings.Bounded Ada.Strings Ada.Streams.Stream_IO Ada.Streams Ada.Storage_IO Ada.Sequential_IO Ada.Real_Time.Timing_Events' +
'Ada.Real_Time Ada.Numerics.Real_Arrays Ada.Numerics.Generic_Real_Arrays Ada.Numerics.Generic_Elementary_Functions Ada.Numerics.Generic_Complex_Types Ada.Numerics.Generic_Complex_Elementary_Functions Ada.Numerics.Generic_Complex_Arrays Ada.Numerics.Float_Random Ada.Numerics.Elementary_Functions Ada.Numerics.Discrete_Random' +
'Ada.Numerics.Complex_Types Ada.Numerics.Complex_Elementary_Functions Ada.Numerics.Complex_Arrays Ada.Numerics Ada.Locales Ada.Iterator_Interfaces Ada.IO_Exceptions Ada.Interrupts.Names Ada.Interrupts Ada.Integer_Wide_Wide_Text_IO' +
'Ada.Integer_Wide_Text_IO Ada.Integer_Text_IO Ada.Float_Wide_Wide_Text_IO Ada.Float_Wide_Text_IO Ada.Float_Text_IO Ada.Finalization Ada.Execution_Time.Timers Ada.Execution_Time.Interrupts Ada.Execution_Time.Group_Budgets Ada.Execution_Time' +
'Ada.Exceptions Ada.Environment_Variables Ada.Dynamic_Priorities Ada.Dispatching.Round_Robin Ada.Dispatching.Non_Preemptive Ada.Dispatching.EDF Ada.Dispatching Ada.Directories.Information Ada.Directories.Hierarchical_File_Names Ada.Directories' +
'Ada.Direct_IO Ada.Decimal Ada.Containers.Vectors.Vector_Iterator_Interfaces Ada.Containers.Vectors.Generic_Sorting Ada.Containers.Vectors Ada.Containers.Unbounded_Synchronized_Queues Ada.Containers.Unbounded_Priority_Queues Ada.Containers.Synchronized_Queue_Interfaces Ada.Containers.Ordered_Sets.Set_Iterator_Interfaces Ada.Containers.Ordered_Sets.Generic_Keys' +
'Ada.Containers.Ordered_Sets Ada.Containers.Ordered_Maps.Map_Iterator_Interfaces Ada.Containers.Ordered_Maps Ada.Containers.Multiway_Trees.Tree_Iterator_Interfaces Ada.Containers.Multiway_Trees Ada.Containers.Indefinite_Vectors Ada.Containers.Indefinite_Ordered_Sets Ada.Containers.Indefinite_Ordered_Maps Ada.Containers.Indefinite_Multiway_Trees Ada.Containers.Indefinite_Holders' +
'Ada.Containers.Indefinite_Hashed_Sets Ada.Containers.Indefinite_Hashed_Maps Ada.Containers.Indefinite_Doubly_Linked_Lists Ada.Containers.Hashed_Sets.Set_Iterator_Interfaces Ada.Containers.Hashed_Sets.Generic_Keys Ada.Containers.Hashed_Sets Ada.Containers.Hashed_Maps.Map_Iterator_Interfaces Ada.Containers.Hashed_Maps Ada.Containers.Doubly_Linked_Lists.List_Iterator_Interfaces Ada.Containers.Doubly_Linked_Lists.Generic_Sorting' +
'Ada.Containers.Doubly_Linked_Lists Ada.Containers.Bounded_Synchronized_Queues Ada.Containers.Bounded_Priority_Queues Ada.Containers Ada.Complex_Text_IO Ada.Command_Line Ada.Characters.Latin_1 Ada.Characters.Handling Ada.Characters.Conversions Ada.Characters' +
'Ada.Calendar.Time_Zones Ada.Calendar.Arithmetic Ada.Calendar Ada.Asynchronous_Task_Control Ada.Assertions Ada';

// Predefined Ada 2012 operators
var operators =
'=> .. >= <= /= << >>';
//'\=&gt; \.\. /\= &gt;\= &lt;\= &lt;&lt; &gt;&gt; <&gt;';

// Predefined Ada 2012 types
var ada2012_types =
'Address Alignment Alphanumeric Any_Priority Attribute_Handle Barrier_Limit Binary Binary_Format Bit_Order Boolean ' +
'Bounded_String Buffer_Type Byte Byte_Array C_float Cause_Of_Termination char char_array char_array_access char16_array ' +
'char16_t char32_array char32_t Character Character_Mapping Character_Mapping_Function Character_Range Character_Ranges Character_Sequence Character_Set ' +
'chars_ptr chars_ptr_array COBOL_Character Complex Complex_Matrix Complex_Vector Constant_Reference_Type Controlled Count Count_Type ' +
'Country_Code CPU CPU_Range CPU_Time Cursor Day_Count Day_Duration Day_Name Day_Number Deadline ' +
'Decimal_Element Direction Directory_Entry_Type Dispatching_Domain Display_Format double Double_Precision Duration Encoding_Scheme Exception_Id ' +
'Exception_Occurrence Exception_Occurrence_Access Exit_Status Extended_Index Field File_Access File_Kind File_Mode File_Size File_Type ' +
'Filter_Type Float Floating Fortran_Character Fortran_Integer Forward_Iterator Generator Group_Budget Group_Budget_Handler Hash_Type ' +
'Holder Hour_Number Imaginary Imaginary int Integer Integer_Address Interrupt_Id Interrupt_Priority ISO_646 ' +
'Language_Code Leap_Seconds_Count Length_Range Limited_Controlled List Logical long Long_Binary long_double Long_Floating ' +
'Map Membership Minute_Number Month_Number Name Name_Case_Kind Natural Number_Base Numeric Packed_Decimal ' +
'Packed_Format Parameterless_Handler Params_Stream_Type Partition_Id Picture plain_char Pointer Positive Positive_Count Priority ' +
'ptrdiff_t Queue Real Real_Matrix Real_Vector Reference_Type Reversible_Iterator Root_Storage_Pool Root_Storage_Pool_With_Subpools Root_Stream_Type ' +
'Root_Subpool RPC_Receiver Search_Type Second_Duration Second_Number Seconds_Count Set short signed_char size_t ' +
'State Storage_Array Storage_Count Storage_Element Storage_Offset Stream_Access Stream_Element Stream_Element_Array Stream_Element_Count Stream_Element_Offset ' +
'String String_Access Subpool_Handle Suspension_Object Synchronous_Barrier Tag Tag_Array Task_Array Task_Id Termination_Handler ' +
'Time Time_Offset Time_Span Timer Timer_Handler Timing_Event Timing_Event_Handler Tree Trim_End Truncation ' +
'Type_Set Unbounded_String Uniformly_Distributed unsigned unsigned_char unsigned_long unsigned_short UTF_16_Wide_String UTF_8_String UTF_String ' +
'Vector wchar_array wchar_t Wide_Character Wide_Character_Mapping Wide_Character_Mapping_Function Wide_Character_Range Wide_Character_Ranges Wide_Character_Sequence Wide_Character_Set ' +
'Wide_String Wide_Wide_Character Wide_Wide_Character_Mapping Wide_Wide_Character_Mapping_Function Wide_Wide_Character_Range Wide_Wide_Character_Ranges Wide_Wide_Character_Sequence Wide_Wide_Character_Set Wide_Wide_String Year_Number';

		this.regexList = [
			{ regex: /--(.*)$/m,										css: 'comments' },			// one line and multiline comments
			{ regex: /\'\(/,											css: 'plain' },			// one line and multiline comments
			{ regex: /\"[^\"]*\"/g,											css: 'string' },			// one line and multiline comments
			{ regex: /\'.'/,											css: 'string' },			// one line and multiline comments
			{ regex: /\'[^']\'/,											css: 'string' },			// one line and multiline comments
			{ regex: /\'\([A-Z0-9_]+\)/,											css: 'plain' },			// one line and multiline comments
//			{ regex: /\'\(\'.\'\)/,											css: 'plain' },			// one line and multiline comments
//			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,	css: 'string' },			// double quoted strings
//			{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,	css: 'string' },			// single quoted strings
			{ regex: /(package|task)\s+body\s+\w[\w\d\._]+/gi,			css: 'function' },		// compiler Directives and Region tags
			{ regex: /(package|procedure|function|task|project)\s+\w[\w\d\._]+/gi,	css: 'function' },		// compiler Directives and Region tags
			{ regex: /\b[\d][\d_\.]*(E[\+\-]?[\d_]+)?/gi,				css: 'numeric_literal' },			// numbers 12_345.000_001
			{ regex: /\b[0-9]+\#[\da-f][\dA-F_\.]*\#(E[\+\-]?[\d_]+)?/gi,	css: 'numeric_literal' },			// numbers 16#F5D_300#
			{ regex: new RegExp('pragma[ \t]+('+ada2012_pragmas+')', 'gi'),		css: 'pragma' },			// operators and such
			{ regex: new RegExp('\\b('+ada2012_aspects+')[ \t]+\=&gt;', 'gi'),		css: 'aspect' },			// operators and such
			{ regex: new RegExp('with[ \t]+('+ada2012_aspects+')[ \t;]+(\=&gt;)?', 'gi'),		css: 'aspect' },			// operators and such
			{ regex: new RegExp(this.getKeywords(ada2012_exceptions), 'gi'),	css: 'exception' },			// operators and such
			{ regex: new RegExp('raise[ \t]+[A-Z][A-Z0-9_\.]+', 'gi'),			css: 'exception' },			// operators and such
			{ regex: new RegExp('\'('+ada2012_attributes+')', 'gi'),			css: 'attribute' },			// operators and such
//			{ regex: new RegExp(this.getKeywords(operators),'gi'),		css: 'operator' },			// keyword
			{ regex: new RegExp(this.getKeywords(ada2012_types), 'gi'),			css: 'type' },			// operators and such
			{ regex: new RegExp(this.getKeywords(ada2012_keywords), 'gi'),		css: 'keyword' },			// keyword
			{ regex: new RegExp(this.getKeywords(ada2012_restrictions), 'gi'),		css: 'restriction' },			// keyword
			{ regex: new RegExp(this.getKeywords(ada2012_packages), 'gi'),		css: 'ada_predefined' }			// keyword
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['ada'];

	SyntaxHighlighter.brushes.Ada = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
