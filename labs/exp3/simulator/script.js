
var isstartedsimulation=false;

var i=1;


// Components hide show code here
function breadboard() {
    var x = document.getElementById("board");
    x.style.visibility = "visible";

    var instance = new BoardController();

    instance.setJsPlumbInstance(jsPlumb);
    instance.initDefault();
    instance.setCircuitContainer('mid');

    //breadboard definition 
    {
      
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r1',  [0, 0, 0, -1, 59,   24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r2',  [0, 0, 0, -1, 72.5, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r4',  [0, 0, 0, -1, 99.5, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r5',  [0, 0, 0, -1, 113,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r3',  [0, 0, 0, -1, 86,   24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r9',  [0, 0, 0, -1, 180.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r11', [0, 0, 0, -1, 221,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r8',  [0, 0, 0, -1, 167,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r6',  [0, 0, 0, -1, 140,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r10', [0, 0, 0, -1, 194,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r14', [0, 0, 0, -1, 261.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r15', [0, 0, 0, -1, 275,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r7',  [0, 0, 0, -1, 153.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r16', [0, 0, 0, -1, 302,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r12', [0, 0, 0, -1, 234.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r19', [0, 0, 0, -1, 342.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r20', [0, 0, 0, -1, 356,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r18', [0, 0, 0, -1, 329,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r21', [0, 0, 0, -1, 383,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r17', [0, 0, 0, -1, 315.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r13', [0, 0, 0, -1, 248,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r22', [0, 0, 0, -1, 398,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r23', [0, 0, 0, -1, 410,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r24', [0, 0, 0, -1, 423.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r25', [0, 0, 0, -1, 437, 24], 'black');

        instance.addEndPoint('black',4,1, 'board', 'row2', 'r27', [0, 0, 0, 1, 72.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r26', [0, 0, 0, 1, 59, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r30', [0, 0, 0, 1, 113, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r28', [0, 0, 0, 1, 86, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r32', [0, 0, 0, 1, 153.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r31', [0, 0, 0, 1, 140, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r29', [0, 0, 0, 1, 99.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r35', [0, 0, 0, 1, 194, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r34', [0, 0, 0, 1, 180.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r36', [0, 0, 0, 1, 221, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r33', [0, 0, 0, 1, 167.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r37', [0, 0, 0, 1, 234.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r38', [0, 0, 0, 1, 248, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r39', [0, 0, 0, 1, 261.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r41', [0, 0, 0, 1, 302, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r40', [0, 0, 0, 1, 275, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r42', [0, 0, 0, 1, 315.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r43', [0, 0, 0, 1, 329, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r45', [0, 0, 0, 1, 356, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r44', [0, 0, 0, 1, 342.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r46', [0, 0, 0, 1, 383, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r47', [0, 0, 0, 1, 396.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r49', [0, 0, 0, 1, 423.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r50', [0, 0, 0, 1, 437, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r48', [0, 0, 0, 1, 410, 38], 'black');



        instance.addEndPoint('black',4,1, 'board', 'row3', 'r51', [0, 0, 0, -1, 478, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r52', [0, 0, 0, -1, 491.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r55', [0, 0, 0, -1, 532, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r54', [0, 0, 0, -1, 518.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r53', [0, 0, 0, -1, 505, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r56', [0, 0, 0, -1, 559, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r57', [0, 0, 0, -1, 572.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r58', [0, 0, 0, -1, 586, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r59', [0, 0, 0, -1, 599.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r61', [0, 0, 0, -1, 640, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r62', [0, 0, 0, -1, 653.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r60', [0, 0, 0, -1, 613, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r63', [0, 0, 0, -1, 667, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r64', [0, 0, 0, -1, 680.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r66', [0, 0, 0, -1, 721, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r67', [0, 0, 0, -1, 734.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r65', [0, 0, 0, -1, 694, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r68', [0, 0, 0, -1, 748, 24], 'black');
        instance.addEndPoint('black',4, 1,'board', 'row3', 'r69', [0, 0, 0, -1, 761.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r72', [0, 0, 0, -1, 815.5, 24],'black');
        instance.addEndPoint('black',4, 1,'board', 'row3', 'r71', [0, 0, 0, -1, 802, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r70', [0, 0, 0, -1, 775, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r73', [0, 0, 0, -1, 829, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r75', [0, 0, 0, -1, 856, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r74', [0, 0, 0, -1, 842.5, 24],'black');

          instance.addEndPoint('black',4,1, 'board', 'row4', 'r77', [0, 0, 0, 1, 491.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r78', [0, 0, 0, 1, 505, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r81', [0, 0, 0, 1, 559, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r76', [0, 0, 0, 0, 478, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r82', [0, 0, 0, 1, 572.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r79', [0, 0, 0, 1, 518.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r80', [0, 0, 0, 1, 532, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r84', [0, 0, 0, 1, 599.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r86', [0, 0, 0, 1, 640, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r85', [0, 0, 0, 1, 613, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r87', [0, 0, 0, 1, 653.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r89', [0, 0, 0, 1, 680.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r88', [0, 0, 0, 1, 667, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r91', [0, 0, 0, 1, 721, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r83', [0, 0, 0, 1, 586, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r90', [0, 0, 0, 1, 694, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r92', [0, 0, 0, 1, 734.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r96', [0, 0, 0, 1, 802, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r95', [0, 0, 0, 1, 775, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r94', [0, 0, 0, 1, 761.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r93', [0, 0, 0, 1, 748, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r97', [0, 0, 0, 1, 815.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r99', [0, 0, 0, 1, 842.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r98', [0, 0, 0, 1, 829, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r100', [0, 0, 0, 1, 856, 38], 'black');


        instance.addEndPoint('black',4,1, 'board', 'row5', 'r101', [0, 0, 0, -1, 59.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r102', [0, 0, 0, -1, 73, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r103', [0, 0, 0, -1, 86.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r104', [0, 0, 0, -1, 100, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r105', [0, 0, 0, -1, 113.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r106', [0, 0, 0, -1, 140.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r108', [0, 0, 0, -1, 167.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r110', [0, 0, 0, -1, 194.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r107', [0, 0, 0, -1, 154, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r109', [0, 0, 0, -1, 181, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r111', [0, 0, 0, -1, 221.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r112', [0, 0, 0, -1, 235, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r113', [0, 0, 0, -1, 248.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r115', [0, 0, 0, -1, 275.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r114', [0, 0, 0, -1, 262, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r117', [0, 0, 0, -1, 316, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r118', [0, 0, 0, -1, 329.5, 267],'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r116', [0, 0, 0, -1, 302.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r119', [0, 0, 0, -1, 343, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r120', [0, 0, 0, -1, 356.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r121', [0, 0, 0, -1, 383.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r122', [0, 0, 0, -1, 397, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r124', [0, 0, 0, -1, 424, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r123', [0, 0, 0, -1, 410.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r125', [0, 0, 0, -1, 437.5, 267], 'black');


        instance.addEndPoint('black',4,1, 'board', 'row6', 'r127', [0, 0, 0, 1, 73, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r126', [0, 0, 0, 1, 59.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r129', [0, 0, 0, 1, 100, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r128', [0, 0, 0, 1, 86.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r130', [0, 0, 0, 1, 113.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r131', [0, 0, 0, 1, 140.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r132', [0, 0, 0, 1, 154, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r133', [0, 0, 0, 1, 167.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r134', [0, 0, 0, 1, 181, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r136', [0, 0, 0, 1, 221.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r135', [0, 0, 0, 1, 194.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r137', [0, 0, 0, 1, 235, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r138', [0, 0, 0, 1, 248.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r140', [0, 0, 0, 1, 275.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r142', [0, 0, 0, 1, 316, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r139', [0, 0, 0, 1, 262, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r141', [0, 0, 0, 1, 302.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r143', [0, 0, 0, 1, 329.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r145', [0, 0, 0, 1, 356.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r144', [0, 0, 0, 1, 343, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r147', [0, 0, 0, 1, 397, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r146', [0, 0, 0, 1, 383.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r148', [0, 0, 0, 1, 410.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r149', [0, 0, 0, 1, 424, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r150', [0, 0, 0, 1, 437.5, 281], 'black');
 


        instance.addEndPoint('black',4,1, 'board', 'row7', 'r151', [0, 0, 0, -1, 478, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r152', [0, 0, 0, -1, 491.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r155', [0, 0, 0, -1, 532, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r153', [0, 0, 0, -1, 505, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r157', [0, 0, 0, -1, 572.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r156', [0, 0, 0, -1, 559, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r154', [0, 0, 0, -1, 518.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r160', [0, 0, 0, -1, 613, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r162', [0, 0, 0, -1, 653.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r161', [0, 0, 0, -1, 640, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r159', [0, 0, 0, -1, 599.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r158', [0, 0, 0, -1, 586, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r163', [0, 0, 0, -1, 667, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r164', [0, 0, 0, -1, 680.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r165', [0, 0, 0, -1, 694, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r166', [0, 0, 0, -1, 721, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r168', [0, 0, 0, -1, 748, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r167', [0, 0, 0, -1, 734.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r169', [0, 0, 0, -1, 761.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r170', [0, 0, 0, -1, 775, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r171', [0, 0, 0, -1, 802, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r172', [0, 0, 0, -1, 815.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r174', [0, 0, 0, -1, 842.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r173', [0, 0, 0, -1, 829, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r175', [0, 0, 0, -1, 856, 267], 'black');

        instance.addEndPoint('black',4,1, 'board', 'row8', 'r176', [0, 0, 0, 0, 478, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r177', [0, 0, 0, -1, 491.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r180', [0, 0, 0, -1, 532, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r178', [0, 0, 0, -1, 505, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r182', [0, 0, 0, -1, 572.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r181', [0, 0, 0, -1, 559, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r179', [0, 0, 0, -1, 518.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r187', [0, 0, 0, -1, 653.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r183', [0, 0, 0, -1, 586, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r186', [0, 0, 0, -1, 640, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r185', [0, 0, 0, -1, 613, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r184', [0, 0, 0, -1, 599.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r188', [0, 0, 0, -1, 667, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r189', [0, 0, 0, -1, 680.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r191', [0, 0, 0, -1, 721, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r190', [0, 0, 0, -1, 694, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r192', [0, 0, 0, -1, 734.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r193', [0, 0, 0, -1, 748, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r194', [0, 0, 0, -1, 761.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r196', [0, 0, 0, -1, 802, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r195', [0, 0, 0, -1, 775, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r197', [0, 0, 0, -1, 815.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r198', [0, 0, 0, -1, 829, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r199', [0, 0, 0, -1, 842.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r200', [0, 0, 0, -1, 856, 281], 'black');


 
    }
}



function ic741() {
    var x = document.getElementById("ic741");
    x.style.visibility = "visible";

    var ic741 = new BoardController();
    ic741.setJsPlumbInstance(jsPlumb);
    ic741.setCircuitContainer('mid');

    {
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_8', 'ic741_81', [0, 0, 1, -1, 8, 5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_8', 'ic741_82', [0, 0, 1, -1, 8, 18.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_8', 'ic741_83', [0, 0, 1, -1, 8, 32], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_8', 'ic741_84', [0, 0, 1, -1, 8, 45.5], 'purple');
  //      ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_VCC', 'ic7404_VCC5', [0, 0, 1, -1, 5, 54], 'red');

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_71', [0, 0, 1, -1, 21.5, 5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_72', [0, 0, 1, -1, 21.5, 18.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_73', [0, 0, 1, -1, 21.5, 32], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_74', [0, 0, 1, -1, 21.5, 45.5], 'purple');
     //  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_6A', 'ic7404_6A05', [0, 0, 1, -1, 18.5, 54], 'red');

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_6', 'ic741_61', [0, 0, 1, -1, 35, 5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_6', 'ic741_62', [0, 0, 1, -1, 35, 18.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_6', 'ic741_63', [0, 0, 1, -1, 35, 32], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_6', 'ic741_64', [0, 0, 1, -1, 35, 45.5], 'purple');
   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_6Y', 'ic7404_6Y05', [0, 0, 1, -1, 32, 54], 'red');

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_51', [0, 0, 1, -1, 48.5, 5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_52', [0, 0, 1, -1, 48.5, 18.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_53', [0, 0, 1, -1, 48.5, 32], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_54', [0, 0, 1, -1, 48.5, 45.5], 'purple');
 
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_11', [0, 0, 1, -1, 8, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_12', [0, 0, 1, -1, 8, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_13', [0, 0, 1, -1, 8, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_14', [0, 0, 1, -1, 8, 153], 'purple');

   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_1Y', 'ic7404_1Y01', [0, 0, 1, -1, 18.5, 94], 'red');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_21', [0, 0, 1, -1, 21.5, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_22', [0, 0, 1, -1, 21.5, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_23', [0, 0, 1, -1, 21.5, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_24', [0, 0, 1, -1, 21.5, 153], 'purple');

      //  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_2A', 'ic7404_2A01', [0, 0, 1, -1, 32, 94], 'red');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_31', [0, 0, 1, -1, 35, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_32', [0, 0, 1, -1, 35, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_33', [0, 0, 1, -1, 35, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_34', [0, 0, 1, -1, 35, 153], 'purple');
   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_2Y', 'ic7404_2Y01', [0, 0, 1, -1, 45.5, 94], 'red');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_41', [0, 0, 1, -1, 48.5, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_42', [0, 0, 1, -1, 48.5, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_43', [0, 0, 1, -1, 48.5, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_44', [0, 0, 1, -1, 48.5, 153], 'purple');

   }
}



function ic7411() {
    var x = document.getElementById("ic7411");
    x.style.visibility = "visible";

    var ic7411 = new BoardController();
    ic7411.setJsPlumbInstance(jsPlumb);
    ic7411.setCircuitContainer('mid');

    {
     ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_8', 'ic7411_81', [0, 0, 1, -1, 8, 5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_8', 'ic7411_82', [0, 0, 1, -1, 8, 18.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_8', 'ic7411_83', [0, 0, 1, -1, 8, 32], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_8', 'ic7411_84', [0, 0, 1, -1, 8, 45.5], 'purple');
  //      ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_VCC', 'ic7404_VCC5', [0, 0, 1, -1, 5, 54], 'red');

        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_7', 'ic7411_71', [0, 0, 1, -1, 21.5, 5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_7', 'ic7411_72', [0, 0, 1, -1, 21.5, 18.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_7', 'ic7411_73', [0, 0, 1, -1, 21.5, 32], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_7', 'ic7411_74', [0, 0, 1, -1, 21.5, 45.5], 'purple');
     //  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic71404_6A', 'ic7404_6A05', [0, 0, 1, -1, 18.5, 54], 'red');

        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_6', 'ic7411_61', [0, 0, 1, -1, 35, 5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_6', 'ic7411_62', [0, 0, 1, -1, 35, 18.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_6', 'ic7411_63', [0, 0, 1, -1, 35, 32], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_6', 'ic7411_64', [0, 0, 1, -1, 35, 45.5], 'purple');
   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_6Y', 'ic7404_6Y05', [0, 0, 1, -1, 32, 54], 'red');

        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_5', 'ic7411_51', [0, 0, 1, -1, 48.5, 5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_5', 'ic7411_52', [0, 0, 1, -1, 48.5, 18.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_5', 'ic7411_53', [0, 0, 1, -1, 48.5, 32], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_5', 'ic7411_54', [0, 0, 1, -1, 48.5, 45.5], 'purple');
 
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_1', 'ic7411_11', [0, 0, 1, -1, 8, 112.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_1', 'ic7411_12', [0, 0, 1, -1, 8, 126], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_1', 'ic7411_13', [0, 0, 1, -1, 8, 139.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_1', 'ic7411_14', [0, 0, 1, -1, 8, 153], 'purple');

   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_1Y', 'ic7404_1Y01', [0, 0, 1, -1, 18.5, 94], 'red');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_2', 'ic7411_21', [0, 0, 1, -1, 21.5, 112.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_2', 'ic7411_22', [0, 0, 1, -1, 21.5, 126], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_2', 'ic7411_23', [0, 0, 1, -1, 21.5, 139.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_2', 'ic7411_24', [0, 0, 1, -1, 21.5, 153], 'purple');

      //  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_2A', 'ic7404_2A01', [0, 0, 1, -1, 32, 94], 'red');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_3', 'ic7411_31', [0, 0, 1, -1, 35, 112.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_3', 'ic7411_32', [0, 0, 1, -1, 35, 126], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_3', 'ic7411_33', [0, 0, 1, -1, 35, 139.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_3', 'ic7411_34', [0, 0, 1, -1, 35, 153], 'purple');

   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_2Y', 'ic7404_2Y01', [0, 0, 1, -1, 45.5, 94], 'red');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_4', 'ic7411_41', [0, 0, 1, -1, 48.5, 112.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_4', 'ic7411_42', [0, 0, 1, -1, 48.5, 126], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_4', 'ic7411_43', [0, 0, 1, -1, 48.5, 139.5], 'purple');
        ic7411.addEndPoint('purple',4.2,1, 'ic7411', 'ic7411_4', 'ic7411_44', [0, 0, 1, -1, 48.5, 153], 'purple');

   }
}


function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
 
{
    supply.addEndPoint('red',7,2, 'supply', 'VCC', 'VCC1', [0, 0, 0,0, 83, 84], 'red');
    supply.addEndPoint('black',7,2, 'supply', 'GND', 'GND1', [0, 0, 0, 0, 140, 84], 'black');
     supply.addEndPoint('blue',7,2, 'supply', 'VEE', 'VEE1', [0, 0, 0, 0, 198, 84], 'blue');
}
}

function resistor1() {
    var x = document.getElementById("resistance1");
    x.style.visibility = "visible";
    var resistance1= new BoardController();
    resistance1.setJsPlumbInstance(jsPlumb);
    resistance1.setCircuitContainer('mid');
    resistance1.makeDraggable('resistance1');
    draggable('resistance1', 'mid');
{
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C101', [0, 0, 1, -1, 11, -47], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C102', [0, 0, 1, -1, 11, -33], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C103', [0, 0, 1, -1, 11, -19], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C104', [0, 0, 1, -1, 11, -5], 'purple');

    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A101', [0, 0, 1, -1, 11, 61], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A102', [0, 0, 1, -1, 11, 75], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A103', [0, 0, 1, -1, 11, 89], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A104', [0, 0, 1, -1, 11, 103], 'purple');
}
}
function resistor2() {
    var x = document.getElementById("resistance2");
    x.style.visibility = "visible";
    var resistance2= new BoardController();
    resistance2.setJsPlumbInstance(jsPlumb);
    resistance2.setCircuitContainer('mid');
    resistance2.makeDraggable('resistance2');
    draggable('resistance2', 'mid');

    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C101', [0, 0, 1, -1, 11, -47], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C102', [0, 0, 1, -1, 11, -33], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C103', [0, 0, 1, -1, 11, -19], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C104', [0, 0, 1, -1, 11, -5], 'purple');

    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A101', [0, 0, 1, -1, 11, 61], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A102', [0, 0, 1, -1, 11, 75], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A103', [0, 0, 1, -1, 11, 89], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A104', [0, 0, 1, -1, 11, 103], 'purple');

}
function resistor3() {
    var x = document.getElementById("resistance3");
    x.style.visibility = "visible";
    var resistance3= new BoardController();
    resistance3.setJsPlumbInstance(jsPlumb);
    resistance3.setCircuitContainer('mid');
    resistance3.makeDraggable('resistance3');
    draggable('resistance3', 'mid');

    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C101', [0, 0, 1, -1, 11, -47], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C102', [0, 0, 1, -1, 11, -33], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C103', [0, 0, 1, -1, 11, -19], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C104', [0, 0, 1, -1, 11, -5], 'purple');

    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A101', [0, 0, 1, -1, 11, 61], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A102', [0, 0, 1, -1, 11, 75], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A103', [0, 0, 1, -1, 11, 89], 'purple'); 
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A104', [0, 0, 1, -1, 11, 103], 'purple');

}
function resistor4() {
    var x = document.getElementById("resistance4");
    x.style.visibility = "visible";
    var resistance4= new BoardController();
    resistance4.setJsPlumbInstance(jsPlumb);
    resistance4.setCircuitContainer('mid');
    resistance4.makeDraggable('resistance4');
    draggable('resistance4', 'mid');

   resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C101', [0, 0, 1, -1, 11, -47], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C102', [0, 0, 1, -1, 11, -33], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C103', [0, 0, 1, -1, 11, -19], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C104', [0, 0, 1, -1, 11, -5], 'purple');

    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A101', [0, 0, 1, -1, 11, 61], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A102', [0, 0, 1, -1, 11, 75], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A103', [0, 0, 1, -1, 11, 89], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A104', [0, 0, 1, -1, 11, 103], 'purple');
  
}
function capacitor() {

    var capacitor1= new BoardController();
   capacitor1.setJsPlumbInstance(jsPlumb);
   capacitor1.setCircuitContainer('mid');
    capacitor1.makeDraggable('capacitor1');
    draggable('capacitor1', 'mid');

   capacitor1.addEndPoint('purple',4.2,1, 'capacitor1', 'capacitor1_C1', 'capacitor1_C101', [0, 0, 1, -1, 33,  77], 'purple');
   capacitor1.addEndPoint('purple',4.2,1, 'capacitor1', 'capacitor1_C1', 'capacitor1_C102', [0, 0, 1, -1, 33,  90], 'purple');
   capacitor1.addEndPoint('purple',4.2,1, 'capacitor1', 'capacitor1_C1', 'capacitor1_C103', [0, 0, 1, -1, 33, 104], 'purple');
   capacitor1.addEndPoint('purple',4.2,1, 'capacitor1', 'capacitor1_C1', 'capacitor1_C104', [0, 0, 1, -1, 33, 118], 'purple');

   capacitor1.addEndPoint('purple',4.2,1, 'capacitor1', 'capacitor1_A1', 'capacitor1_A101', [0, 0, 1, -1, 4,  77], 'purple');
   capacitor1.addEndPoint('purple',4.2,1, 'capacitor1', 'capacitor1_A1', 'capacitor1_A102', [0, 0, 1, -1, 4,  90], 'purple');
   capacitor1.addEndPoint('purple',4.2,1, 'capacitor1', 'capacitor1_A1', 'capacitor1_A103', [0, 0, 1, -1, 4, 104], 'purple');
   capacitor1.addEndPoint('purple',4.2,1, 'capacitor1', 'capacitor1_A1', 'capacitor1_A104', [0, 0, 1, -1, 4, 118], 'purple');

}
function diode1() {
    var x = document.getElementById("diode1");
    x.style.visibility = "visible";
    var diode1= new BoardController();
    diode1.setJsPlumbInstance(jsPlumb);
    diode1.setCircuitContainer('mid');
    diode1.makeDraggable('diode1');
    draggable('diode1', 'mid');

    diode1.addEndPoint('purple',4.2,1, 'diode1', 'diode1_C1', 'diode1_C101', [0, 0, 1, -1, 8, -54], 'purple');
    diode1.addEndPoint('purple',4.2,1, 'diode1', 'diode1_C1', 'diode1_C102', [0, 0, 1, -1, 8, -40], 'purple');
    diode1.addEndPoint('purple',4.2,1, 'diode1', 'diode1_C1', 'diode1_C103', [0, 0, 1, -1, 8, -28], 'purple');
    diode1.addEndPoint('purple',4.2,1, 'diode1', 'diode1_C1', 'diode1_C104', [0, 0, 1, -1, 8, -12], 'purple');

    diode1.addEndPoint('purple',4.2,1, 'diode1', 'diode1_A1', 'diode1_A101', [0, 0, 1, -1, 8, 54], 'purple');
    diode1.addEndPoint('purple',4.2,1, 'diode1', 'diode1_A1', 'diode1_A102', [0, 0, 1, -1, 8, 68], 'purple');
    diode1.addEndPoint('purple',4.2,1, 'diode1', 'diode1_A1', 'diode1_A103', [0, 0, 1, -1, 8, 82], 'purple');
    diode1.addEndPoint('purple',4.2,1, 'diode1', 'diode1_A1', 'diode1_A104', [0, 0, 1, -1, 8, 96], 'purple');

}
function diode2() {
    var x = document.getElementById("diode2");
    x.style.visibility = "visible";
    var diode2= new BoardController();
    diode2.setJsPlumbInstance(jsPlumb);
   diode2.setCircuitContainer('mid');
    diode2.makeDraggable('diode2');
    draggable('diode2', 'mid');

    diode2.addEndPoint('purple',4.2,1, 'diode2', 'diode2_C1', 'diode2_C101', [0, 0, 1, -1, 8, -54], 'purple');
    diode2.addEndPoint('purple',4.2,1, 'diode2', 'diode2_C1', 'diode2_C102', [0, 0, 1, -1, 8, -40], 'purple');
    diode2.addEndPoint('purple',4.2,1, 'diode2', 'diode2_C1', 'diode2_C103', [0, 0, 1, -1, 8, -28], 'purple');
    diode2.addEndPoint('purple',4.2,1, 'diode2', 'diode2_C1', 'diode2_C104', [0, 0, 1, -1, 8, -12], 'purple');

    diode2.addEndPoint('purple',4.2,1, 'diode2', 'diode2_A1', 'diode2_A101', [0, 0, 1, -1, 8, 54], 'purple');
    diode2.addEndPoint('purple',4.2,1, 'diode2', 'diode2_A1', 'diode2_A102', [0, 0, 1, -1, 8, 68], 'purple');
    diode2.addEndPoint('purple',4.2,1, 'diode2', 'diode2_A1', 'diode2_A103', [0, 0, 1, -1, 8, 82], 'purple');
    diode2.addEndPoint('purple',4.2,1, 'diode2', 'diode2_A1', 'diode2_A104', [0, 0, 1, -1, 8, 96], 'purple');

}
function cro1() {
    var x = document.getElementById("cro");
    x.style.visibility = "visible";
    var cro= new BoardController();
    cro.setJsPlumbInstance(jsPlumb);
    cro.setCircuitContainer('mid');
    
    cro.addEndPoint('black',6,1, 'cro', 'cro_C1', 'cro_C101', [0, 0, 0, 0, 172, 155], 'black');


}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

        
    window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");

 

       breadboard();
       diode1();
       diode2();
       ic741();
       ic7411();
       supply();
       resistor3();
       resistor1();
       resistor2();
       resistor4();
       cro1();
    }
}

function resetCircuit() {
     if(confirm("Do you want to reset?")){
           sessionStorage.setItem("reloading", "true");
    document.location.reload();  
        }
 
}



function chooseone()
{ 
    var a=document.getElementById("capacitor").value;
    if( a=="capa1")
    {
       var b=document.getElementById("capacitor1");
       b.style.visibility="visible"; 
       document.getElementById("cap1").src = "images/capacitor1.png";
        var c=document.getElementById("cap1");
       c.style.visibility="visible";
       capacitor();
    }
    else  if( a=="capa2")
    {
       var d=document.getElementById("capacitor1");
       d.style.visibility="visible"; 
       
       capacitor();
       document.getElementById("cap1").src = "images/capacitor2.png";
       var e=document.getElementById("cap1");
       e.style.visibility="visible";
    }
     else  if( a=="capa3")
    {
       var f=document.getElementById("capacitor1");
       f.style.visibility="visible"; 
       
       capacitor();
       document.getElementById("cap1").src = "images/capacitor3.png";
       var g=document.getElementById("cap1");
       g.style.visibility="visible";
    }
    else
    {   
        alert("Please choose a capacitor");
        var a=document.getElementById("cap1");
        a.style="visibility:hidden;"
         var capacitor1= document.getElementById("capacitor1");
         capacitor1.style=".visibility:hidden";
    }
}
       
function  addtable()
{var i;
  var g=document.getElementById("mytable");
      g.style.visibility="visible";
   
    var yinput=document.getElementById('capacitor').value;

    var table=document.getElementById('mytable');
        var row=table.insertRow(i);
         i++;
          var cell0=row.insertCell(0);
          var cell1=row.insertCell(1);
          var cell2=row.insertCell(2);
          cell0.style="text-align:center;";
          cell1.style="text-align:center;";
          cell2.style="text-align:center;";
        

if(yinput=="capa1")
{ var a=prompt("Enter the experimental frequency for capacitor 0.1µF");
if(a>= 54&& a<=66.8)
{alert("Correct Result");

       cell0.innerHTML=0.1;
       cell1.innerHTML=a;
       cell2.innerHTML=56.8;
       window.scrollTo(0,document.body.scrollHeight);

   }
   else
    {alert("Wrong result.Re-measure the frequency.");}
}
 else if(yinput=="capa2")
{
    var a=prompt("Enter the experimental frequency for capacitor 0.2µF ");
if(a>=26 && a<=34)
{alert("Correct Result");
    cell0.innerHTML=0.2;
    cell1.innerHTML=a;
    cell2.innerHTML=28.4;
       window.scrollTo(0,document.body.scrollHeight);

     }
   else
    {alert("Wrong result.Re-measure the frequency.");}
}
 else if(yinput=="capa3")
{ var a=prompt("Enter the experimental frequency for capacitor 0.3µF");
if(a>= 17&& a<=22)
{alert("Correct Result");
    cell0.innerHTML=0.3;
    cell1.innerHTML=a;
    cell2.innerHTML=18.93;
       window.scrollTo(0,document.body.scrollHeight);
    
     }
   else
    {alert("Wrong result.Re-measure the frequency.");}
      
}

else
     
 {
       alert("You choose no capacitor");
}       
    
       }

