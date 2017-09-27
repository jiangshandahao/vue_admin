<template>
	<div>
		<el-row>
			<el-col :span="24" >
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
					<el-breadcrumb-item>用户列表</el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
			
			<el-col :span="24" class="warp-main">
				<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
					<el-form :inline="true" >
						<el-form-item>
							<el-input placeholder="姓名" style="min-width: 240px;"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" >查询</el-button>
						</el-form-item>
					</el-form>
					<!--列表-->
					<el-table highlight-current-row   style="width: 100%;">
						<el-table-column type="index" width="60">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="120" sortable>
						</el-table-column>
						<el-table-column prop="sex" label="性别" width="100" sortable>
						</el-table-column>
						<el-table-column prop="age" label="年龄" width="100" sortable>
						</el-table-column>
						<el-table-column prop="birth" label="生日" width="120" sortable>
						</el-table-column>
						<el-table-column prop="addr" label="地址" min-width="180" sortable>
						</el-table-column>
					</el-table>
				</el-col>
			</el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style>
</style>