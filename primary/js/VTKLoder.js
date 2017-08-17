THREE.VTKLoader = function(){
    THREE.EventDispatcher.call(this);
};

THREE.VTKLoader.prototype = {

    constructor: THREE.VTKLoader,

    load: function(url, callback){
        var scope = this;

        var request = new XMLHttpRequest();

        request.addEventListener("load", function(event){
            //responseText �Ƿ��������ص�vtk���ı����ݣ�ͨ��parse��������ת��Ϊgeometry
            var geometry = scope.parse(event.target.responseText);
            scope.dispatchEvent({type:"load", content: geometry});
            callback && callback();
        }, false);

        request.addEventListener("progress", function(event){
            scope.dispatchEvent({type: "progress", loaded: event.loaded, total: event.total});
        }, false);

        request.addEventListener("error", function(){
            scope.dispatchEvent({type: "error", message:"cannot load url: " + url })
        }, false);

        request.open('get', url, true);

        request.send(null);
    },


    parse: function(data){
        var geometry = new THREE.Geometry();

        function vertex(x, y, z){
            geometry.vertices.push(new THREE.Vector3(x, y, z));
        }

        function faces(a, b, c){
            geometry.faces.push(new THREE.Faces(a, b, c));
        }

        function face4(a, b, c, d){
            geometry.faces.push(new THREE.Face4(a, b, c, d));
        }

        var pattern, result;

        //����������ʽ������ ��������  �ҵ����� �������� �ı�����
        // ��

        geometry.computeCentroids();
        geometry.computeFaceNormals();
        geometry.computeVertexNormals();
        geometry.computeBoundingSphere();

        return geometry;




    }
}