<template>
  <div>
    <el-dialog :title="title" :visible.sync="visible" style="padding-bottom: 5vh" width="30%">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="auto" :rules="rules">
        <el-row>
          <el-col :span="24">
            <el-form-item label="抽样方案序列号" prop="customerCode">
              <el-input v-model="temp.customerCode" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="批量下限" prop="customerName">
              <el-input v-model="temp.customerName" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="批量上限" prop="customerName">
              <el-input v-model="temp.customerName" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="特殊检验水平S-1" prop="customerName">
              <el-input v-model="temp.customerName" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="特殊检验水平S-2" prop="customerName">
              <el-input v-model="temp.customerName" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="特殊检验水平S-3" prop="customerName">
              <el-input v-model="temp.customerName" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="一般检验水平1" prop="customerName">
              <el-input v-model="temp.customerName" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="一般检验水平2" prop="customerName">
              <el-input v-model="temp.customerName" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '编辑',
      visible: false,
      temp: {
        customerCode: '',
        customerName: '',
        dutyParagraph: '',
        type1: '',
        type2: '',
        type3: '',
        product: ''
      },
      rules: {}
    }
  },
  methods: {
    show(val) {
      this.visible = true
    },
    submitForm() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.visible = false
          this.$parent.getList()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    }
  }
}
</script>
