$(function(){
	obj ={
		back:function(){
			$("#edit").hide();
			$("#zhenDtb").parents(".panel.datagrid").show();
			$("#zhenDtb").datagrid("resize");
		}
	}
	init();
	$("#zhenDtb").datagrid({
		title:"诊断模板",
		iconCls:"icon-search",
		url:"grid.json",
		striped:true,
		nowrap:true,
		rownumbers : true,
		//singleSelect : true,
		fitColumns : true,
		columns : [[
			{
				field : 'id',
				title : 'ID',
				sortable : true,
				width : 100,
				checkbox:true,
			},
			{
				field : 'code',
				title : '编码',
				sortable : true,
				width : 100,
			},
			{
				field : 'name',
				title : '名称',
				sortable : true,
				width : 100,
			}
		]],
		toolbar : '#zhenD',
		pagination : true,
		pageSize : 10,
		pageList : [10, 20, 30],
		onDblClickRow:function(rowIndex, rowData){
			//doing
			$("#edit").show().layout("resize");
			$("#editTb").datagrid("resize");
			$("#zhenDtb").parents(".panel.datagrid").hide();
		}
	});
	$("#editTb").datagrid({
		title:"诊断模板",
		iconCls:"icon-search",
		url:"grid.json",
		striped:true,
		nowrap:true,
		rownumbers : true,
		//singleSelect : true,
		fitColumns : true,
		columns : [[
			{
				field : 'id',
				title : 'ID',
				sortable : true,
				width : 100,
				checkbox:true,
			},
			{
				field : 'code',
				title : '标准指标',
				sortable : true,
				width : 100,
			},
			{
				field : 'name',
				title : '指标值',
				sortable : true,
				width : 100,
			}
		]],
		toolbar : '#editBar',
		pagination : true,
		pageSize : 10,
		pageList : [10, 20, 30],
		onDblClickRow:function(rowIndex, rowData){
			//doing
		}
	});
	
	$('#tt').tree({
		url:'tree-grid.json'
	});
	$("#xxx").click(function(e){
		e.stopPropagation();
		alert($(this).html());
	});
	
	
	var _div='<a id="aaa" href="###"></a>';
	$("#xxx").wrap(_div).css({'border':'0','background-color':'transparent','padding':'0','margin':'0'});
	$("#aaa").linkbutton({
		iconCls:'icon-add',
		onClick:function(){
			$(this).find('input').click();
		}
	});
});
function init(){
	$("#editBar .easyui-linkbutton[iconCls='icon-back']").click(obj.back);
}