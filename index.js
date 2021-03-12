/**
 * 创建场景对象Scene
 */
var scene = new THREE.Scene();
const divEle = document.querySelector("div");
/**
 * 创建网格模型
 */
var geometry = new THREE.SphereGeometry(20, 20, 20); //创建一个球体几何对象
// var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
var material = new THREE.MeshLambertMaterial({
  color: 0xff0000
}); //材质对象Material
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh


//  //网格模型添加到场景中
/**
 * 光源设置
 */
//点光源
var point = new THREE.PointLight(0xffffff);
point.position.set(400, 200, 300); //点光源位置
scene.add(point); //点光源添加到场景中

/**
 * 相机设置
 */
var width = divEle.offsetWidth; //窗口宽度
var height = divEle.offsetHeight; //窗口高度
var k = width / height; //窗口宽高比
var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
//创建相机对象
var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
camera.position.set(200, 300, 200); //设置相机位置
camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

/**
 * 创建渲染器对象
 */
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); //设置渲染区域尺寸
renderer.setClearColor(0xe6e6fa, 1); //设置背景颜色
scene.rotateY(0.785);
scene.rotateX(-0.785);
divEle.appendChild(renderer.domElement); //body元素中插入canvas对象

// running函数
let numberOne= 1;
let numberTwo= 1;
var randomOne = Math.floor(Math.random() * 11 -150);
var randomTwo = Math.floor(Math.random() * 201 -100);

function Running(randomOne,randomTwo){
  console.log(randomOne,randomTwo);
  let runningBall = setInterval(function(){
  randomOne+=numberOne;
  randomTwo+=numberTwo;
  if(randomOne===180||randomOne===-180){
    numberOne=-numberOne;
  }else if(randomTwo===180||randomTwo===-180){
    numberTwo=-numberTwo;
  }
  ;
  mesh.position.set(randomOne, randomTwo, 0);
  scene.add(mesh);
  renderer.render(scene, camera);
},10);
}

Running(randomOne,randomTwo)