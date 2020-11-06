var connections = [];

var deletecon=0;
 var jsPlumbInstance = null;
 
function BoardController() {
   
    var endPoints = [];

    this.setJsPlumbInstance = function (instance) {
        jsPlumbInstance = instance;
    };

    this.setCircuitContainer = function (drawingContainer) {
        jsPlumbInstance.Defaults.Container = drawingContainer;
    };

    this.initDefault = function () {

        jsPlumbInstance.importDefaults({
            Connector: ["Bezier", { curviness: 20 }],
            PaintStyle: { strokeStyle: 'blue', lineWidth: 3 },
            EndpointStyle: { radius: 4, fillStyle: 'blue' },
            HoverPaintStyle: { strokeStyle: "#728C00" },
             ConnectionsDetachable   : true
        });

        jsPlumbInstance.bind("beforeDrop", function (params) {
            var sourceEndPoint = params.connection.endpoints[0];
            var targetEndPoint = params.dropEndpoint;
            if (!targetEndPoint || !sourceEndPoint) {
                return false;
            }
            var sourceEndPointgroup = sourceEndPoint.getParameter('groupName');
            var targetEndPointgroup = targetEndPoint.getParameter('groupName');

            if (sourceEndPointgroup == targetEndPointgroup) {
                alert("Already connected internally");
                return false;
            } else {
                return true;
            }
        });

        jsPlumbInstance.bind("dblclick", function (conn) {
            jsPlumb.detach(conn);
            deletecon++;
            return false;
        });
     

        jsPlumbInstance.bind("jsPlumbConnection", function (conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName')
            connections[source] = conn.connection;

        });
    };

    this.addEndPoint = function (stroke,radius,maxConnection, divID, groupName, endPointName, anchorArray,color) {
        var endpointOptions = {
            isSource: true,
            isTarget: true,
            anchor: anchorArray,
            maxConnections: maxConnection,
            parameters: {
                "divID": divID,
                "endPointName": endPointName,
                "groupName": groupName,
                "type": 'output',
                "acceptType": 'input'
            },
            paintStyle: { radius: radius, fillStyle: color },
connectorStyle:{strokeStyle: stroke,lineWidth:3}
        };

        jsPlumbInstance.addEndpoint(divID, endpointOptions);

        setEndpoint(endPointName, endpointOptions);
    };

    var setEndpoint = function (endPointName, endpointOptions) {
        endPoints[endPointName] = {
            "endPointName": endpointOptions.parameters.endPointName,
            "groupName": endpointOptions.parameters.groupName,
            "divID": endpointOptions.parameters.divID
        };

    };

    this.makeDraggable = function (selector) {
        jsPlumbInstance.draggable(selector, {
            stop: function () {
                var x = $(selector).position().left;
                jsPlumbInstance.repaint(selector);
            }
        });
    };


}


function draggable(item, container) {
    var dragItem = document.querySelector("#" + item);
    var container = document.querySelector("#" + container);

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === dragItem) {
            active = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;

        active = false;
    }

    function drag(e) {
        if (active) {

            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
} 

//var g = new Graph(56);
//console.log("###noofedges->"+(g.numberofedges-deletecon));
var theorem1=false;
  

function checkCircuit() {
   
    var g = new Graph(45);

  
  
    var groups = ['row4','row6','row7','row8','row2','row3','input_A', 'input_B','led_A','led_A1','led_C1', 'led_C','resistance1_C1','resistance1_A1','resistance2_C1','resistance2_A1','resistance3_A1' ,'resistance3_C1','resistance4_A1','resistance4_C1','resistance5_C1','resistance5_A1','cap_C1','cap_A1'  ,'VCC', 'GND', 'ic555_5', 'ic555_6', 'ic555_7', 'ic555_8', 'ic555_1', 'ic555_3', 'ic555_2', 'ic555_4', 'row1', 'row5'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
     console.log("###noofedges->"+(g.numberofedges-deletecon));


if(g.isConnected("ic555_8","VCC"))
{console.log("ic 8 connected to vcc");
if(g.isConnected("ic555_4","VCC"))
{console.log("ic 4 connected to vcc");
if(g.isConnected("ic555_1","GND"))
{console.log("ic 1 connected to gnd");
if(g.isConnected("ic555_2","ic555_6"))
{console.log("ic 1 connected to gnd");

    if((g.isConnected("VCC","resistance3_A1")&&g.isConnected("ic555_2","resistance3_C1"))||(g.isConnected("ic555_2","resistance3_A1")&&g.isConnected("VCC","resistance3_C1")))
  {console.log("resistance3");
    if((g.isConnected("resistance4_C1","ic555_6")&&g.isConnected("resistance4_A1","GND"))||(g.isConnected("resistance4_A1","ic555_6")&&g.isConnected("resistance4_C1","GND")))
{console.log("resistance4");
    if((g.isConnected("resistance1_A1","VCC")&&g.isConnected("resistance1_C1","led_A1"))||(g.isConnected("resistance1_C1","VCC")&&g.isConnected("resistance1_A1","led_A1")))
{console.log("resistance1");
    if((g.isConnected("resistance2_C1","GND")&&g.isConnected("led_C","resistance2_A1"))||(g.isConnected("resistance2_A1","GND")&&g.isConnected("led_C","resistance2_C1")))
{console.log("resistance2");


 if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&((g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("resistance5_C1","input_B"))||(g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("resistance5_A1","input_B")))
    &&((g.isConnected("cap_C1","input_B")&&g.isConnected("cap_A1","GND"))||(g.isConnected("cap_A1","input_B")&&g.isConnected("cap_C1","GND"))))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}

else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("resistance5_C1","input_B")
    &&((g.isConnected("cap_C1","resistance5_C1")&&g.isConnected("cap_A1","GND"))||(g.isConnected("cap_A1","resistance5_C1")&&g.isConnected("cap_C1","GND"))))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}

else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("resistance5_A1","input_B")
    &&((g.isConnected("cap_C1","resistance5_A1")&&g.isConnected("cap_A1","GND"))||(g.isConnected("cap_A1","resistance5_A1")&&g.isConnected("cap_C1","GND"))))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}


else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("cap_A1","input_B")
    &&g.isConnected("cap_A1","resistance5_C1")&&g.isConnected("cap_C1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}
else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("cap_A1","input_B")
    &&g.isConnected("cap_A1","resistance5_A1")&&g.isConnected("cap_C1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}



else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("cap_C1","input_B")
    &&g.isConnected("cap_C1","resistance5_A1")&&g.isConnected("cap_A1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}
else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("cap_C1","input_B")
    &&g.isConnected("cap_C1","resistance5_C1")&&g.isConnected("cap_A1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}



else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_C1")
    &&g.isConnected("ic555_2","input_A")&&((g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("resistance5_C1","input_B"))||(g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("resistance5_A1","input_B")))
    &&((g.isConnected("cap_C1","input_B")&&g.isConnected("cap_A1","GND"))||(g.isConnected("cap_A1","input_B")&&g.isConnected("cap_C1","GND"))))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}

else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_C1")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("resistance5_C1","input_B")
    &&((g.isConnected("cap_C1","resistance5_C1")&&g.isConnected("cap_A1","GND"))||(g.isConnected("cap_A1","resistance5_C1")&&g.isConnected("cap_C1","GND"))))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}

else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_C1")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("resistance5_A1","input_B")
    &&((g.isConnected("cap_C1","resistance5_A1")&&g.isConnected("cap_A1","GND"))||(g.isConnected("cap_A1","resistance5_A1")&&g.isConnected("cap_C1","GND"))))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}


else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_C1")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("cap_A1","input_B")
    &&g.isConnected("cap_A1","resistance5_C1")&&g.isConnected("cap_C1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}
else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_C1")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("cap_A1","input_B")
    &&g.isConnected("cap_A1","resistance5_A1")&&g.isConnected("cap_C1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}



else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_C1")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("cap_C1","input_B")
    &&g.isConnected("cap_C1","resistance5_A1")&&g.isConnected("cap_A1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}
else if(g.isConnected("led_C1","led_A")&&g.isConnected("ic555_3","led_C1")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("cap_C1","input_B")
    &&g.isConnected("cap_C1","resistance5_C1")&&g.isConnected("cap_A1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}




else if(g.isConnected("led_C1","ic555_3")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&((g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("resistance5_C1","input_B"))||(g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("resistance5_A1","input_B")))
    &&((g.isConnected("cap_C1","input_B")&&g.isConnected("cap_A1","GND"))||(g.isConnected("cap_A1","input_B")&&g.isConnected("cap_C1","GND"))))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}



else if(g.isConnected("led_C1","ic555_3")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("resistance5_C1","input_B")
    &&((g.isConnected("cap_C1","resistance5_C1")&&g.isConnected("cap_A1","GND"))||(g.isConnected("cap_A1","resistance5_C1")&&g.isConnected("cap_C1","GND"))))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}

else if(g.isConnected("led_C1","ic555_3")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("resistance5_A1","input_B")
    &&((g.isConnected("cap_C1","resistance5_A1")&&g.isConnected("cap_A1","GND"))||(g.isConnected("cap_A1","resistance5_A1")&&g.isConnected("cap_C1","GND"))))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}


else if(g.isConnected("led_C1","ic555_3")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("cap_A1","input_B")
    &&g.isConnected("cap_A1","resistance5_C1")&&g.isConnected("cap_C1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}
else if(g.isConnected("led_C1","ic555_3")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("cap_A1","input_B")
    &&g.isConnected("cap_A1","resistance5_A1")&&g.isConnected("cap_C1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}



else if(g.isConnected("led_C1","ic555_3")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_C1")&&g.isConnected("cap_C1","input_B")
    &&g.isConnected("cap_C1","resistance5_A1")&&g.isConnected("cap_A1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}
else if(g.isConnected("led_C1","ic555_3")&&g.isConnected("ic555_3","led_A")
    &&g.isConnected("ic555_2","input_A")&&g.isConnected("ic555_3","resistance5_A1")&&g.isConnected("cap_C1","input_B")
    &&g.isConnected("cap_C1","resistance5_C1")&&g.isConnected("cap_A1","GND"))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
}



else{alert("Wrong Connections.Please Check Again.");}
}
else{alert(" Resistor 2 is not connected to properly.");}
}
else{alert(" Resistor 1 is not connected to properly.");}

}
else{alert(" Resistor 4 is not connected to properly.");}
}
else{alert(" Resistor 3 is not connected to properly.");}

}
else{alert(" Pin 2 is not connected to Pin 6.");}

}
else{alert(" Pin 1 is not connected to GND.");}

}
else
{
    alert(" Pin 4 is not connected to VCC.");
}
}
else{
 alert(" Pin 8 is not connected to VCC.");
}
console.log("executed")
}






























