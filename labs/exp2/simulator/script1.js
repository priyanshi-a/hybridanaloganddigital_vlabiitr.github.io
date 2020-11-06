
var isstartedsimulation=false;
 var str = new String("F");
var i=1;
var sum;

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

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_71', [0, 0, 1, -1, 21.5, 5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_72', [0, 0, 1, -1, 21.5, 18.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_73', [0, 0, 1, -1, 21.5, 32], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_74', [0, 0, 1, -1, 21.5, 45.5], 'purple');

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_6', 'ic741_61', [0, 0, 1, -1, 35, 5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_6', 'ic741_62', [0, 0, 1, -1, 35, 18.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_6', 'ic741_63', [0, 0, 1, -1, 35, 32], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_6', 'ic741_64', [0, 0, 1, -1, 35, 45.5], 'purple');

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_51', [0, 0, 1, -1, 48.5, 5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_52', [0, 0, 1, -1, 48.5, 18.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_53', [0, 0, 1, -1, 48.5, 32], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_54', [0, 0, 1, -1, 48.5, 45.5], 'purple');
 
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_11', [0, 0, 1, -1, 8, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_12', [0, 0, 1, -1, 8, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_13', [0, 0, 1, -1, 8, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_14', [0, 0, 1, -1, 8, 153], 'purple');

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_21', [0, 0, 1, -1, 21.5, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_22', [0, 0, 1, -1, 21.5, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_23', [0, 0, 1, -1, 21.5, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_24', [0, 0, 1, -1, 21.5, 153], 'purple');

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_31', [0, 0, 1, -1, 35, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_32', [0, 0, 1, -1, 35, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_33', [0, 0, 1, -1, 35, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_34', [0, 0, 1, -1, 35, 153], 'purple');

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_41', [0, 0, 1, -1, 48.5, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_42', [0, 0, 1, -1, 48.5, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_43', [0, 0, 1, -1, 48.5, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_44', [0, 0, 1, -1, 48.5, 153], 'purple');

   }
}



function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
   /* supply.makeDraggable('supply');
    draggable('supply', 'mid');*/
{
    supply.addEndPoint('red',5,1, 'supply', 'VCC', 'VCC', [0, 0, 0, 0,  52, 57], 'red');
    supply.addEndPoint('green',5,1, 'supply', 'GND', 'GND', [0, 0, 0, 0,  97, 57], 'green');
    supply.addEndPoint('blue',5,1, 'supply', 'VEE', 'VEE', [0, 0, 0, 0, 141, 58], 'blue');
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

    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C102', [0, 0, 1, -1, 12, -47], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C102', [0, 0, 1, -1, 12, -33], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C102', [0, 0, 1, -1, 12, -19], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C102', [0, 0, 1, -1, 12, -5], 'purple');

    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A102', [0, 0, 1, -1, 12, 61], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A102', [0, 0, 1, -1, 12, 75], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A102', [0, 0, 1, -1, 12, 89], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A102', [0, 0, 1, -1, 12, 103], 'purple');
  
}
function resistor3() {
    var x = document.getElementById("resistance3");
    x.style.visibility = "visible";
    var resistance3= new BoardController();
    resistance3.setJsPlumbInstance(jsPlumb);
    resistance3.setCircuitContainer('mid');
    resistance3.makeDraggable('resistance3');
    draggable('resistance3', 'mid');

    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C101', [0, 0, 1, -1, 13, -47], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C102', [0, 0, 1, -1, 13, -33], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C103', [0, 0, 1, -1, 13, -19], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C104', [0, 0, 1, -1, 13, -5], 'purple');

    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A101', [0, 0, 1, -1, 13, 61], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A102', [0, 0, 1, -1, 13, 75], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A103', [0, 0, 1, -1, 13, 89], 'purple'); 
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A104', [0, 0, 1, -1, 13, 103], 'purple');

}
function resistor4() {
    var x = document.getElementById("resistance4");
    x.style.visibility = "visible";
    var resistance4= new BoardController();
    resistance4.setJsPlumbInstance(jsPlumb);
    resistance4.setCircuitContainer('mid');
    resistance4.makeDraggable('resistance4');
    draggable('resistance4', 'mid');

    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C101', [0, 0, 1, -1, 14, -47], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C102', [0, 0, 1, -1, 14, -33], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C103', [0, 0, 1, -1, 14, -19], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C104', [0, 0, 1, -1, 14, -5], 'purple');

    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A101', [0, 0, 1, -1, 14, 61], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A102', [0, 0, 1, -1, 14, 75], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A103', [0, 0, 1, -1, 14, 89], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A104', [0, 0, 1, -1, 14, 103], 'purple');

}
function resistor5() {
    var x = document.getElementById("resistance5");
    x.style.visibility = "visible";
    var resistance5= new BoardController();
    resistance5.setJsPlumbInstance(jsPlumb);
    resistance5.setCircuitContainer('mid');
    resistance5.makeDraggable('resistance5');
    draggable('resistance5', 'mid');

    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C101', [0, 0, 1, -1, 13, -46], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C102', [0, 0, 1, -1, 13, -32], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C103', [0, 0, 1, -1, 13, -18], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C104', [0, 0, 1, -1, 13, -4], 'purple');

    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A101', [0, 0, 1, -1, 13, 60], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A102', [0, 0, 1, -1, 13, 74], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A103', [0, 0, 1, -1, 13, 88], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A104', [0, 0, 1, -1, 13, 102], 'purple');
  
}
function resistor6() {
    var x = document.getElementById("resistance6");
    x.style.visibility = "visible";
    var resistance6= new BoardController();
    resistance6.setJsPlumbInstance(jsPlumb);
    resistance6.setCircuitContainer('mid');
    resistance6.makeDraggable('resistance6');
    draggable('resistance6', 'mid');

    resistance6.addEndPoint('purple',4.2,1, 'resistance6', 'resistance6_C1', 'resistance6_C101', [0, 0, 1, -1, 13, -46], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance6', 'resistance6_C1', 'resistance6_C102', [0, 0, 1, -1, 13, -32], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance6', 'resistance6_C1', 'resistance6_C103', [0, 0, 1, -1, 13, -18], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance6', 'resistance6_C1', 'resistance6_C104', [0, 0, 1, -1, 13, -4], 'purple');

    resistance6.addEndPoint('purple',4.2,1, 'resistance6', 'resistance6_A1', 'resistance6_A101', [0, 0, 1, -1, 13, 60], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance6', 'resistance6_A1', 'resistance6_A102', [0, 0, 1, -1, 13, 74], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance6', 'resistance6_A1', 'resistance6_A103', [0, 0, 1, -1, 13, 88], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance6', 'resistance6_A1', 'resistance6_A104', [0, 0, 1, -1, 13, 102], 'purple');
 
}
function resistor7() {
    var x = document.getElementById("resistance7");
    x.style.visibility = "visible";
    var resistance6= new BoardController();
    resistance6.setJsPlumbInstance(jsPlumb);
    resistance6.setCircuitContainer('mid');
    resistance6.makeDraggable('resistance7');
    draggable('resistance7', 'mid');

    resistance6.addEndPoint('purple',4.2,1, 'resistance7', 'resistance7_C1', 'resistance7_C101', [0, 0, 1, -1, 13, -46], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance7', 'resistance7_C1', 'resistance7_C102', [0, 0, 1, -1, 13, -32], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance7', 'resistance7_C1', 'resistance7_C103', [0, 0, 1, -1, 13, -18], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance7', 'resistance7_C1', 'resistance7_C104', [0, 0, 1, -1, 13, -4], 'purple');

    resistance6.addEndPoint('purple',4.2,1, 'resistance7', 'resistance7_A1', 'resistance7_A101', [0, 0, 1, -1, 13, 60], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance7', 'resistance7_A1', 'resistance7_A102', [0, 0, 1, -1, 13, 74], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance7', 'resistance7_A1', 'resistance7_A103', [0, 0, 1, -1, 13, 88], 'purple');
    resistance6.addEndPoint('purple',4.2,1, 'resistance7', 'resistance7_A1', 'resistance7_A104', [0, 0, 1, -1, 13, 102], 'purple');
 
}
function multimeter()
{

   var x1=  document.getElementById("shape");
  x1.style.visibility="visible";
  var multimeter = new BoardController();
    multimeter.setJsPlumbInstance(jsPlumb);
    multimeter.setCircuitContainer('mid');


    multimeter.addEndPoint('red',7,1, 'shape', 'multimeter_VCC', 'multimeter_VCC1', [0, 0, 0,0, 894, -218], 'red');
    multimeter.addEndPoint('black',7,1, 'shape', 'multimeter_GND', 'multimeter_GND1', [0, 0, 0, 0, 862, -218], 'black');
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it





         function resetCircuit()
         {   


 if(confirm("Do you want to reset?")){
           window.location.reload();
        }
    

         }



            
function addition()

{    var m= document.getElementById("heading");
     m.style.visibility="visible";
   document.getElementById("instruction").disabled=false;
     
     document.getElementById('heading').innerHTML = "ADDITION OPERATION";
     document.getElementById('myDropdown').innerHTML = "<b>1.</b> Click on the component button to place the component on the table.<br><b>2</b>. Make connections as per the circuit diagram.";
     var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image1ins.png";
     var src = document.getElementById("myDropdown");
     src.appendChild(img);
     document.getElementById('myDropdown').innerHTML += "<br><b>3</b>. Click on '<b>Check</b>' button. If connections are right, use range sliders inside <b>'Components'</b> box to vary the input voltages.<br><b>4</b>. Click on <b>'Calculate'</b> button to view the output on DMM.<br><b>5.</b> Click on <b>'Add to table'</b> button to record calculations.";
     var y= document.getElementById("chooseone");
     y.style.visibility="hidden";
    
     var x= document.getElementById("Components");
     x.style.visibility="visible";
     
     
    document.getElementById("resistancebutton").addEventListener("click", function(){
  	document.getElementById("resis4").innerHTML="R" +str.sub();
   resistor1();
   resistor2();
   resistor3();
   resistor4();
});
 
  
 
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit1();
});
      document.getElementById("switchbutton").addEventListener("click", function(){
   multimeter();
   
}); 
    document.getElementById("startbutton").addEventListener("click", function(){
    var x=document.getElementById("display");
    x.style.visibility="visible";
    animate();
});
      document.getElementById("capbutton").addEventListener("click", function(){
   one.setValue("0");
   two.setValue("0");
   three.setValue("0");
   var c= document.getElementById("myrange2");
   c.style.visibility="visible";
   var b= document.getElementById("myrange1");
   b.style.visibility="visible";
   var l= document.getElementById("myrange");
   l.style.visibility="visible";
   var g= document.getElementById("v3");
   g.style.visibility="visible";
   var u= document.getElementById("v2");
   u.style.visibility="visible";
     var v= document.getElementById("v1");
   v.style.visibility="visible";
   showfirst();
   showsecond();
   showthird();
});
       document.getElementById("addtable").addEventListener("click", function(){
 var v= document.getElementById("mytable");
   v.style.visibility="visible";
   addvalue();
}); 
    
}
           
function subtraction()
{ var l= document.getElementById("heading");
   l.style.visibility="visible";
   document.getElementById("instruction").disabled=false;
    document.getElementById('heading').innerHTML = "SUBTRACTION OPERATION";
   document.getElementById('myDropdown').innerHTML = "<b>1.</b> Click on the component button to place the component on the table.<br><b>2</b>. Make connections as per the circuit diagram.";
     var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image2ins.png";
     var src = document.getElementById("myDropdown");
     src.appendChild(img);
     document.getElementById('myDropdown').innerHTML += "<br><b>3</b>. Click on '<b>Check</b>' button. If connections are right, use range sliders inside <b>'Components'</b> box to vary the input voltages.<br><b>4</b>. Click on <b>'Calculate'</b> button to view the output on DMM.<br><b>5.</b> Click on <b>'Add to table'</b> button to record calculations.";
    var y= document.getElementById("chooseone");
   y.style.visibility="hidden";

  
  
   var x= document.getElementById("Components");
   x.style.visibility="visible";
    document.getElementById("resistancebutton").addEventListener("click", function(){
  	document.getElementById("resis6").innerHTML="R" +str.sub();
  	document.getElementById("resis4").innerHTML="R<sub>1</sub>" ;
  	document.getElementById("resis5").innerHTML="R<sub>2</sub>" ;
  	document.getElementById("resis7").innerHTML="R<sub>3</sub>" ;
    resistor4();
    resistor5();
    resistor6();
    resistor7();
});
 
  
  document.getElementById("capbutton").addEventListener("click", function(){
    one.setValue("0");
    two.setValue("0");
    var h= document.getElementById("v2");
   h.style.visibility="visible";
    var c= document.getElementById("myrange");
   c.style.visibility="visible";
     var t= document.getElementById("myrange1");
   t.style.visibility="visible";
     var f= document.getElementById("v1");
   f.style.visibility="visible";
    showfirst();
   showsecond();
});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit2();
});
     document.getElementById("startbutton").addEventListener("click", function(){
   var x=document.getElementById("display");
  x.style.visibility="visible";
  animate1();

});
        document.getElementById("switchbutton").addEventListener("click", function(){
   multimeter();
   
}); 
 document.getElementById("addtable").addEventListener("click", function(){
 var v= document.getElementById("mytable1");
   v.style.visibility="visible";
   addvalue1(); 
   });    
}



    function multiplication()
    {
    	var b= document.getElementById("heading");
   b.style.visibility="visible";
   document.getElementById("instruction").disabled=false;
  
    var m= document.getElementById("chooseone");
   m.style.visibility="hidden";
   
     document.getElementById('heading').innerHTML = "MULTIPLICATION BY CONSTANT ";
     document.getElementById('myDropdown').innerHTML = "<b>1.</b> Click on the component button to place the component on the table.<br><b>2</b>. Make connections as per the circuit diagram.";
     var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image4ins.png";
     var src = document.getElementById("myDropdown");
     src.appendChild(img);
     document.getElementById('myDropdown').innerHTML += "<br><b>3</b>. Click on '<b>Check</b>' button. If connections are right, use range sliders inside <b>'Components'</b> box to vary the input voltage and value of feedback resistance R<sub>F</sub>.<br><b>4</b>. Click on <b>'Calculate'</b> button to view the output on DMM.<br><b>5.</b> Click on <b>'Add to table'</b> button to record calculations.";
     var x= document.getElementById("Components");
   x.style.visibility="visible";
     document.getElementById("resistancebutton").addEventListener("click", function(){
  	
  	document.getElementById("resis4").innerHTML="R<sub>1</sub>" ;
  	document.getElementById("resis2").innerHTML="R<sub>2</sub>" ;

     
 var slider=document.getElementById("myrange4").value;
   
     document.getElementById('four').textContent=slider; 
  showfour();

  // resistor1();
   resistor2();
   resistor4();
   document.getElementById("res4").src="images/resistance4.png";
   document.getElementById("res2").src="images/resistance4.png";
     var f= document.getElementById("myrange4");
   f.style.visibility="visible";
     var l= document.getElementById("v4");
   l.style.visibility="visible";

});
      document.getElementById("switchbutton").addEventListener("click", function(){
   multimeter();
   
}); 
     document.getElementById("capbutton").addEventListener("click", function(){
   two.setValue("0");
  
   var e= document.getElementById("myrange3");
   e.style.visibility="visible";
  
      var j= document.getElementById("v2");
   j.style.visibility="visible";
   
   document.getElementById('v2').innerHTML = "V<sub>1</sub>"; 
  showsecond();
  document.getElementById("heading2").innerHTML="V<sub>1</sub>";
});
      document.getElementById("startbutton").addEventListener("click", function(){
   var d=document.getElementById("display");
  d.style.visibility="visible";
  animate3();

});
       document.getElementById("checkbutton").addEventListener("click", function(){
       checkCircuit4();
});
  document.getElementById("addtable").addEventListener("click", function(){
  var v= document.getElementById("mytable3");
  v.style.visibility="visible";
  addvalue3(); 
 });
    }
    

     var display = new SegmentDisplay("display");
      display.pattern         = "##.###";  
      display.cornerType      = 2;
      display.displayType     = 7;
      display.displayAngle    = 9;
      display.digitHeight     = 18;
      display.digitWidth      = 11;
      display.digitDistance   = 2;
      display.segmentWidth    = 3;
      display.segmentDistance = 0.5;
      display.colorOn         = "#000";
      display.colorOff        = "rgba(0, 0, 0, 0)";

     var display1 = new SegmentDisplay("display");
      display1.pattern         = "##.###";  
      display1.cornerType      = 2;
      display1.displayType     = 7;
      display1.displayAngle    = 9;
      display1.digitHeight     = 18;
      display1.digitWidth      = 11;
      display1.digitDistance   = 2;
      display1.segmentWidth    = 3;
      display1.segmentDistance = 0.5;
      display1.colorOn         = "#000";
      display1.colorOff        = "rgba(0, 0, 0, 0)";
     var display4 = new SegmentDisplay("display");
      display4.pattern         = "#.###";  
      display4.cornerType      = 2;
      display4.displayType     = 7;
      display4.displayAngle    = 9;
      display4.digitHeight     = 18;
      display4.digitWidth      = 11;
      display4.digitDistance   = 2;
      display4.segmentWidth    = 3;
      display4.segmentDistance = 0.5;
      display4.colorOn         = "#000";
      display4.colorOff        = "rgba(0, 0, 0, 0)";
       var display5 = new SegmentDisplay("display");
      display5.pattern         = "###.###";  
      display5.cornerType      = 2;
      display5.displayType     = 7;
      display5.displayAngle    = 9;
      display5.digitHeight     = 18;
      display5.digitWidth      = 11;
      display5.digitDistance   = 2;
      display5.segmentWidth    = 3;
      display5.segmentDistance = 0.5;
      display5.colorOn         = "#000";
      display5.colorOff        = "rgba(0, 0, 0, 0)";
 	 var one = new SegmentDisplay("one");
      one.pattern         =  "#.##";  
      one.cornerType      = 2;
      one.displayType     = 7;
      one.displayAngle    = 9;
      one.digitHeight     = 18;
      one.digitWidth      = 11;
      one.digitDistance   = 2;
      one.segmentWidth    = 3;
      one.segmentDistance = 0.5;
      one.colorOn         = "#E41B17";
      one.colorOff        = "#000";

     var two = new SegmentDisplay("two");
      two.pattern         =  "#.##";  
      two.cornerType      = 2;
      two.displayType     = 7;
      two.displayAngle    = 9;
      two.digitHeight     = 18;
      two.digitWidth      = 11;
      two.digitDistance   = 2;
      two.segmentWidth    = 3;
      two.segmentDistance = 0.5;
      two.colorOn         = "#E41B17";
      two.colorOff        = "rgba(0, 0, 0, 0)"; 
  	 var three = new SegmentDisplay("three");
      three.pattern         =  "#.##";  
      three.cornerType      = 2;
      three.displayType     = 7;
      three.displayAngle    = 9;
      three.digitHeight     = 18;
      three.digitWidth      = 11;
      three.digitDistance   = 2;
      three.segmentWidth    = 3;
      three.segmentDistance = 0.5;
      three.colorOn         = "#E41B17";
      three.colorOff        = "#000"; 


   
   function animate1() {  ///for subtraction
        var slider=parseFloat(document.getElementById("myrange").value);
        var slider1=parseFloat(document.getElementById("myrange1").value);
        var a= (slider1-slider);
        var c= a+(a*0.06);


        console.log(z);
var z= c.toFixed(2);

        var n = z.toString();
        if(z>-10 && z<0){
         console.log(typeof(n));
         display1.setValue(n);
         }
        else if(z>0 && z<10) {
          display4.setValue(n);
         }    
        else{
            display1.setValue("0");
         }
  }
      function animate3() {
  		var slider=parseFloat(document.getElementById("myrange3").value);
        var slider1=parseFloat(document.getElementById("myrange4").value);

  		var a= (slider*slider1)/30;
  		var z= -(a+ (a*0.04));
var b = z.toFixed(2);

  		var n = b.toString();
        if(z>-10)
       { display.setValue(n);}
   else {display5.setValue(n)}
   
      }

        
       function animate() {   /// for addition

var slider=parseFloat(document.getElementById("myrange").value);
var slider1=parseFloat(document.getElementById("myrange1").value);
var slider2=parseFloat(document.getElementById("myrange2").value);
var a= (slider+slider1+slider2);

  var b=-(a - (a*0.03));
var z = b.toFixed(2);

var n = z.toString();
console.log(typeof(n));

display1.setValue(n);
      

      //  window.setTimeout('animate()', 100);
      }
 function animate4() {
  var slider=document.getElementById("myrange").value;
        one.setValue(slider);
   
      }
       function animate5() {
  var slider1=document.getElementById("myrange1").value;
        two.setValue(slider1);
   
      }
       function animate6() {
  var slider2=document.getElementById("myrange2").value;
        three.setValue(slider2);
   
      }
    function animate7() {
  var slider2=document.getElementById("myrange3").value;
        two.setValue(slider2);
   
      }
        function animate8() {
  var slider2=document.getElementById("myrange4").value;
        four.setValue(slider2);
   
      }



function showfirst()
{   var x = document.getElementById("power1");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
    supply.makeDraggable('power1');
    draggable('power1', 'mid');
{
    supply.addEndPoint('red',5,1, 'power1', 'power1_VCC', 'power11_VCC', [0, 0, 0, 0, 64, 74], 'red');
    supply.addEndPoint('green',5,1, 'power1', 'power1_GND', 'power11_GND', [0, 0, 0, 0, 98.5, 74], 'green');
   
}

}
function showsecond()
{   var x = document.getElementById("power2");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
    supply.makeDraggable('power2');
    draggable('power2', 'mid');
{
    supply.addEndPoint('red',5,1, 'power2', 'power2_VCC', 'power21_VCC', [0, 0, 0, 0, 64, 74], 'red');
    supply.addEndPoint('green',5,1, 'power2', 'power2_GND', 'power21_GND', [0, 0, 0, 0, 98.5, 74], 'green');
   
}

}

function showthird()
{   var x = document.getElementById("power3");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
    supply.makeDraggable('power3');
    draggable('power3', 'mid');
{
    supply.addEndPoint('red',5,1, 'power3', 'power3_VCC', 'power31_VCC', [0, 0, 0,0, 64, 74], 'red');
    supply.addEndPoint('green',5,1, 'power3', 'power3_GND', 'power31_GND', [0, 0, 0, 0, 98.5, 74], 'green');
   
}

}
function showfour()
{   var x = document.getElementById("power4");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
   
{
    supply.addEndPoint('black',5,1, 'power4', 'power4_VCC', 'power31_VCC', [0, 0, 0,0, 66, 94], 'black');
    supply.addEndPoint('black',5,1, 'power4', 'power4_GND', 'power31_GND', [0, 0, 0, 0, 42.5, 94], 'black');
   
}
}
function focus1()
{
    animate4();
}
function focus2()
{
    animate5();
}
function focus3()
{
    animate6();
}
function focus4()
{
    animate7();
}
function focus5()
{
   var slider=document.getElementById("myrange4").value;
   
     document.getElementById('four').textContent=slider; 
 
}


function addvalue()
{ 
    var xinput=parseFloat(document.getElementById('myrange').value);
    var yinput=parseFloat(document.getElementById('myrange1').value);
var zinput=parseFloat(document.getElementById('myrange2').value);
var sum=(xinput+yinput+zinput);
var add = sum.toFixed(2);
var z= add -(add*0.03);
var add1=z.toFixed(2);

    var table=document.getElementById('mytable');
        var row=table.insertRow(i);
        i++;
        var cell0=row.insertCell(0);
        var cell1=row.insertCell(1);
        var cell2=row.insertCell(2);
        var cell3=row.insertCell(3);
        var cell4=row.insertCell(4);
        var cell5=row.insertCell(5);
        var cell6=row.insertCell(6);
        var cell7=row.insertCell(7);
        var cell8=row.insertCell(8);
        var cell9=row.insertCell(9);
        cell0.style="text-align:center;"
        cell1.style="text-align:center;"

        cell2.style="text-align:center;"

        cell3.style="text-align:center;"
        cell4.style="text-align:center;"
        cell5.style="text-align:center;"
        cell6.style="text-align:center;"
        cell7.style="text-align:center;"
        cell8.style="text-align:center;"
        cell9.style="text-align:center;"


        cell0.innerHTML=1;
        cell1.innerHTML=1;
        cell2.innerHTML=1;
        cell3.innerHTML=1;
        cell4.innerHTML=document.getElementById('myrange').value;
        cell5.innerHTML= document.getElementById('myrange1').value;
        cell6.innerHTML= document.getElementById('myrange2').value;
        cell7.innerHTML=-add;
        cell8.innerHTML=-add1;
        cell9.innerHTML=3;
       }

        function addvalue1()
{ 
    var xinput=parseFloat(document.getElementById('myrange').value);
    var yinput=parseFloat(document.getElementById('myrange1').value);

var sum=(yinput-xinput);
var sub = sum.toFixed(2);
var z=sum +(sum *0.06);
var sub1= z.toFixed(2);


        var table=document.getElementById('mytable1');
        var row=table.insertRow(i);
        i++;
        var cell0=row.insertCell(0);
        var cell1=row.insertCell(1);
        var cell2=row.insertCell(2);
        var cell3=row.insertCell(3);
        var cell4=row.insertCell(4);
        var cell5=row.insertCell(5);
        var cell6=row.insertCell(6);
        var cell7=row.insertCell(7);
        cell0.style="text-align:center;"
        cell1.style="text-align:center;"
        cell2.style="text-align:center;"
        cell3.style="text-align:center;"
        cell4.style="text-align:center;"
        cell5.style="text-align:center;"
        cell6.style="text-align:center;"
        cell7.style="text-align:center;"

        cell0.innerHTML=1;
        cell1.innerHTML=1;
        cell2.innerHTML=1;
        cell3.innerHTML=document.getElementById('myrange').value;
        cell4.innerHTML= document.getElementById('myrange1').value;
        cell5.innerHTML=sub;
        cell6.innerHTML=sub1;
        cell7.innerHTML=6;


       }

     

          function addvalue3()
{ 
   
    var yinput=parseFloat(document.getElementById('myrange3').value);
    var zinput=parseFloat(document.getElementById('myrange4').value);
var a= zinput/30;
var b= a.toFixed(2);
var sum=(yinput*zinput)/30;
var sub = sum.toFixed(2);
var z= sum+ (sum*0.04);
var sub1= z.toFixed(2);
        var table=document.getElementById('mytable3');
        var row=table.insertRow(i);
       	i++;
        var cell0=row.insertCell(0);
        var cell1=row.insertCell(1);
        var cell2=row.insertCell(2);

        var cell3=row.insertCell(3);
        var cell4=row.insertCell(4);
        var cell5=row.insertCell(5);
     	var cell6=row.insertCell(6);
            cell0.style="text-align:center;"
        cell1.style="text-align:center;"
        cell2.style="text-align:center;"
        cell3.style="text-align:center;"
        cell4.style="text-align:center;"
        cell5.style="text-align:center;"
        cell6.style="text-align:center;"

              
        cell0.innerHTML=30;
        cell1.innerHTML=zinput;
        cell2.innerHTML=b;

        cell3.innerHTML=document.getElementById('myrange3').value;
        cell4.innerHTML="-"+sub;
        cell5.innerHTML="-"+sub1;
        cell6.innerHTML=4;
       }