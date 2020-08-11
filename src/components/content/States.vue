<template>
  <table class="table table-bordered" style="width: 100%; height:58px;border: 1px solid #F90;">
    <tbody>
      <tr>
        <td>TJArk</td>
        <td class="s2"></td>
        <td>X:</td>
        <td id="poseX"></td>
        <td>v(m/s):</td>
        <td id="odom_v_linear"></td>
        <td style="text-align: right;">
          <span id="joystick" class="label label-danger">OFF</span> 遥控
          &nbsp; &nbsp;&nbsp;
          <span id="laser" class="label label-danger">OFF</span> 激光 &nbsp;
          &nbsp;&nbsp;
          <span id="imu" class="label label-danger">OFF</span>
          惯导&nbsp;&nbsp;&nbsp;
          <span id="base" class="label label-danger">OFF</span> 底盘
          &nbsp;&nbsp;&nbsp;
          <span id="camera" class="label label-danger">OFF</span> 相机
          &nbsp;&nbsp;&nbsp;
          <!-- <span id="localization" class="label label-danger" >OFF</span> 定位 &nbsp;&nbsp; -->
        </td>
      </tr>
      <tr>
        <td>&theta;:</td>
        <td id="Direction"></td>
        <td>Y:</td>
        <td id="poseY"></td>
        <td>&omega;(rad/s):</td>
        <td id="odom_v_angular"></td>
        <td style="text-align: right;">
          <span class="label label-success" id="electrivity">100%</span>
          电量 &nbsp;&nbsp;&nbsp;
          <span class="label label-success" id="voltage">24V</span> 电压
          &nbsp;&nbsp;&nbsp;
          <span id="connect" class="label label-danger">OFF&nbsp;</span>连接&nbsp;&nbsp;&nbsp;&nbsp;
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "States",
};
</script>

<style scoped>
</style>
