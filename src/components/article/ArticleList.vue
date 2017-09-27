<template>
	<div>
		<el-row class="warp">
			<el-col :span="24" >
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
					<el-breadcrumb-item>图书管理</el-breadcrumb-item>
					<el-breadcrumb-item>图书列表</el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
			 <el-col :span="24" class="warp-main">
			 	<!--工具条-->
			 	<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			 		<el-form :inline="true" >
			 			<el-form-item>
			 				<el-input placeholder="书名"></el-input>
			 			</el-form-item>
			 			<el-form-item>
			 				<el-button type="primary" >查询</el-button>
			 			</el-form-item>
			 			<el-form-item>
			 				<el-button type="primary">新增</el-button>
			 			</el-form-item>
			 		</el-form>
			 	</el-col>
			
			 <!--列表-->
			 <el-table  highlight-current-row   style="width: 100%;">
			 	<el-table-column type="selection" width="55"></el-table-column>
			 	<el-table-column type="index" width="60"></el-table-column>
			 	<el-table-column type="expand">
			 		<template scope="props">
			 			<el-form label-position="left" inline class="demo-table-expand">
			 				<el-form-item label="[图书简介]">
			 					<span>{{ props.row.description }}</span>
			 				</el-form-item>
			 			</el-form>
			 		</template>
			 	</el-table-column>
			 	<el-table-column prop="name" label="书名" sortable></el-table-column>
			 	<el-table-column prop="author" label="作者" width="100" sortable></el-table-column>
			 	<el-table-column prop="publishAt" label="出版日期" width="150" sortable></el-table-column>
			 	<el-table-column label="操作" width="150">
			 		<template scope="scope">
			 			<el-button size="small" >编辑</el-button>
			 			<el-button type="danger"  size="small">删除</el-button>
			 		</template>
			 	</el-table-column>
			 </el-table>
			 
			 <!--工具条-->
			 <el-col :span="24" class="toolbar">
			 	<el-button type="danger" >批量删除</el-button>
			 	<el-pagination layout="prev, pager, next" :page-size="10" style="float:right;">
			 	</el-pagination>
			 </el-col>
			 
			 </el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style>
</style>