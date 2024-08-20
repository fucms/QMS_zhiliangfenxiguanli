<template>
  <div>
    <el-dialog :title="title" :visible.sync="visible" style="padding-bottom: 5vh" width="60%">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="auto" :rules="rules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="订单编号" prop="customerCode">
              <el-input v-model="temp.customerCode" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="发货单编号" prop="customerName">
              <el-input v-model="temp.customerName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="检验单编号" prop="dutyParagraph">
              <el-input v-model="temp.dutyParagraph" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="检验结果" prop="dutyParagraph">
              <el-input v-model="temp.dutyParagraph" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="使用决策" prop="dutyParagraph">
              <el-input v-model="temp.dutyParagraph" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="检验人" prop="dutyParagraph">
              <el-input v-model="temp.dutyParagraph" />
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
      title: '新增',
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
