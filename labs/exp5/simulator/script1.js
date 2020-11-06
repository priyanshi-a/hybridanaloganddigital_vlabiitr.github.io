var isstartedsimulation=false;


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
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r1',  [0, 0, 0, -1, 55,   22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r2',  [0, 0, 0, -1, 68.5, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r4',  [0, 0, 0, -1, 95.5, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r5',  [0, 0, 0, -1, 109,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r3',  [0, 0, 0, -1, 82,   22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r9',  [0, 0, 0, -1, 176.5,22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r11', [0, 0, 0, -1, 217,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r8',  [0, 0, 0, -1, 163,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r6',  [0, 0, 0, -1, 136,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r10', [0, 0, 0, -1, 190,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r14', [0, 0, 0, -1, 257.5,22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r15', [0, 0, 0, -1, 271,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r7',  [0, 0, 0, -1, 149.5,22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r16', [0, 0, 0, -1, 298,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r12', [0, 0, 0, -1, 230.5,22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r19', [0, 0, 0, -1, 338.5,22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r20', [0, 0, 0, -1, 352,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r18', [0, 0, 0, -1, 325,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r21', [0, 0, 0, -1, 379,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r17', [0, 0, 0, -1, 311.5,22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r13', [0, 0, 0, -1, 244,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r22', [0, 0, 0, -1, 392.5,22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r23', [0, 0, 0, -1, 406,  22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r24', [0, 0, 0, -1, 419.5,22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r25', [0, 0, 0, -1, 433, 22], 'black');

        instance.addEndPoint('black',4,1, 'board', 'row2', 'r27', [0, 0, 0, 1, 68.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r26', [0, 0, 0, 1, 55, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r30', [0, 0, 0, 1, 109, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r28', [0, 0, 0, 1, 82, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r32', [0, 0, 0, 1, 149.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r31', [0, 0, 0, 1, 136, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r29', [0, 0, 0, 1, 95.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r35', [0, 0, 0, 1, 190, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r34', [0, 0, 0, 1, 176.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r36', [0, 0, 0, 1, 217, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r33', [0, 0, 0, 1, 163.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r37', [0, 0, 0, 1, 230.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r38', [0, 0, 0, 1, 244, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r39', [0, 0, 0, 1, 257.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r41', [0, 0, 0, 1, 298, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r40', [0, 0, 0, 1, 271, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r42', [0, 0, 0, 1, 311.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r43', [0, 0, 0, 1, 325, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r45', [0, 0, 0, 1, 352, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r44', [0, 0, 0, 1, 338.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r46', [0, 0, 0, 1, 379, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r47', [0, 0, 0, 1, 392.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r49', [0, 0, 0, 1, 419.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r50', [0, 0, 0, 1, 433, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r48', [0, 0, 0, 1, 406, 38], 'black');



        instance.addEndPoint('black',4,1, 'board', 'row3', 'r51', [0, 0, 0, -1, 474, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r52', [0, 0, 0, -1, 487.5, 22],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r55', [0, 0, 0, -1, 528, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r54', [0, 0, 0, -1, 514.5, 22],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r53', [0, 0, 0, -1, 501, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r56', [0, 0, 0, -1, 555, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r57', [0, 0, 0, -1, 568.5, 22],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r58', [0, 0, 0, -1, 582, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r59', [0, 0, 0, -1, 595.5, 22],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r61', [0, 0, 0, -1, 636, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r62', [0, 0, 0, -1, 649.5, 22],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r60', [0, 0, 0, -1, 609, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r63', [0, 0, 0, -1, 663, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r64', [0, 0, 0, -1, 676.5, 22],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r66', [0, 0, 0, -1, 717, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r67', [0, 0, 0, -1, 730.5, 22],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r65', [0, 0, 0, -1, 690, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r68', [0, 0, 0, -1, 744, 22], 'black');
        instance.addEndPoint('black',4, 1,'board', 'row3', 'r69', [0, 0, 0, -1, 757.5, 22],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r72', [0, 0, 0, -1, 811.5, 22],'black');
        instance.addEndPoint('black',4, 1,'board', 'row3', 'r71', [0, 0, 0, -1, 798, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r70', [0, 0, 0, -1, 771, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r73', [0, 0, 0, -1, 825, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r75', [0, 0, 0, -1, 852, 22], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r74', [0, 0, 0, -1, 838.5, 22],'black');

          instance.addEndPoint('black',4,1, 'board', 'row4', 'r77', [0, 0, 0, 1, 487.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r78', [0, 0, 0, 1, 501, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r81', [0, 0, 0, 1, 555, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r76', [0, 0, 0, 0, 474, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r82', [0, 0, 0, 1, 568.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r79', [0, 0, 0, 1, 514.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r80', [0, 0, 0, 1, 528, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r84', [0, 0, 0, 1, 595.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r86', [0, 0, 0, 1, 636, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r85', [0, 0, 0, 1, 609, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r87', [0, 0, 0, 1, 649.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r89', [0, 0, 0, 1, 676.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r88', [0, 0, 0, 1, 663, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r91', [0, 0, 0, 1, 717, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r83', [0, 0, 0, 1, 582, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r90', [0, 0, 0, 1, 690, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r92', [0, 0, 0, 1, 730.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r96', [0, 0, 0, 1, 798, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r95', [0, 0, 0, 1, 771, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r94', [0, 0, 0, 1, 757.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r93', [0, 0, 0, 1, 744, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r97', [0, 0, 0, 1, 811.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r99', [0, 0, 0, 1, 838.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r98', [0, 0, 0, 1, 825, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r100', [0, 0, 0, 1, 852, 38], 'black');


        instance.addEndPoint('black',4,1, 'board', 'row5', 'r101', [0, 0, 0, -1, 55.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r102', [0, 0, 0, -1, 69, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r103', [0, 0, 0, -1, 82.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r104', [0, 0, 0, -1, 96, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r105', [0, 0, 0, -1, 109.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r106', [0, 0, 0, -1, 136.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r108', [0, 0, 0, -1, 163.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r110', [0, 0, 0, -1, 190.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r107', [0, 0, 0, -1, 150, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r109', [0, 0, 0, -1, 177, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r111', [0, 0, 0, -1, 217.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r112', [0, 0, 0, -1, 231, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r113', [0, 0, 0, -1, 244.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r115', [0, 0, 0, -1, 271.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r114', [0, 0, 0, -1, 258, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r117', [0, 0, 0, -1, 312, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r118', [0, 0, 0, -1, 325.5, 265],'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r116', [0, 0, 0, -1, 298.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r119', [0, 0, 0, -1, 339, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r120', [0, 0, 0, -1, 352.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r121', [0, 0, 0, -1, 379.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r122', [0, 0, 0, -1, 393, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r124', [0, 0, 0, -1, 420, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r123', [0, 0, 0, -1, 406.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r125', [0, 0, 0, -1, 433.5, 265], 'black');


        instance.addEndPoint('black',4,1, 'board', 'row6', 'r127', [0, 0, 0, 1, 69, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r126', [0, 0, 0, 1, 55.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r129', [0, 0, 0, 1, 96, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r128', [0, 0, 0, 1, 82.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r130', [0, 0, 0, 1, 109.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r131', [0, 0, 0, 1, 136.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r132', [0, 0, 0, 1, 150, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r133', [0, 0, 0, 1, 163.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r134', [0, 0, 0, 1, 177, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r136', [0, 0, 0, 1, 217.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r135', [0, 0, 0, 1, 190.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r137', [0, 0, 0, 1, 231, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r138', [0, 0, 0, 1, 244.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r140', [0, 0, 0, 1, 271.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r142', [0, 0, 0, 1, 312, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r139', [0, 0, 0, 1, 258, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r141', [0, 0, 0, 1, 298.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r143', [0, 0, 0, 1, 325.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r145', [0, 0, 0, 1, 352.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r144', [0, 0, 0, 1, 339, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r147', [0, 0, 0, 1, 393, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r146', [0, 0, 0, 1, 379.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r148', [0, 0, 0, 1, 406.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r149', [0, 0, 0, 1, 420, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r150', [0, 0, 0, 1, 433.5, 281], 'black');
 


        instance.addEndPoint('black',4,1, 'board', 'row7', 'r151', [0, 0, 0, -1, 474, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r152', [0, 0, 0, -1, 487.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r155', [0, 0, 0, -1, 528, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r153', [0, 0, 0, -1, 501, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r157', [0, 0, 0, -1, 568.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r156', [0, 0, 0, -1, 555, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r154', [0, 0, 0, -1, 514.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r160', [0, 0, 0, -1, 609, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r162', [0, 0, 0, -1, 649.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r161', [0, 0, 0, -1, 636, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r159', [0, 0, 0, -1, 595.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r158', [0, 0, 0, -1, 582, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r163', [0, 0, 0, -1, 663, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r164', [0, 0, 0, -1, 676.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r165', [0, 0, 0, -1, 690, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r166', [0, 0, 0, -1, 717, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r168', [0, 0, 0, -1, 744, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r167', [0, 0, 0, -1, 730.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r169', [0, 0, 0, -1, 757.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r170', [0, 0, 0, -1, 771, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r171', [0, 0, 0, -1, 798, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r172', [0, 0, 0, -1, 811.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r174', [0, 0, 0, -1, 838.5, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r173', [0, 0, 0, -1, 825, 265], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r175', [0, 0, 0, -1, 852, 265], 'black');

        instance.addEndPoint('black',4,1, 'board', 'row8', 'r176', [0, 0, 0, 0, 474, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r177', [0, 0, 0, -1, 487.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r180', [0, 0, 0, -1, 528, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r178', [0, 0, 0, -1, 501, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r182', [0, 0, 0, -1, 568.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r181', [0, 0, 0, -1, 555, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r179', [0, 0, 0, -1, 514.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r187', [0, 0, 0, -1, 649.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r183', [0, 0, 0, -1, 582, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r186', [0, 0, 0, -1, 636, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r185', [0, 0, 0, -1, 609, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r184', [0, 0, 0, -1, 595.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r188', [0, 0, 0, -1, 663, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r189', [0, 0, 0, -1, 676.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r191', [0, 0, 0, -1, 717, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r190', [0, 0, 0, -1, 690, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r192', [0, 0, 0, -1, 730.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r193', [0, 0, 0, -1, 744, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r194', [0, 0, 0, -1, 757.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r196', [0, 0, 0, -1, 798, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r195', [0, 0, 0, -1, 771, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r197', [0, 0, 0, -1, 811.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r198', [0, 0, 0, -1, 825, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r199', [0, 0, 0, -1, 838.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r200', [0, 0, 0, -1, 852, 281], 'black');

 
    }
}

function inputs() {
    var x = document.getElementById("inputs");
    x.style.visibility = "visible";

    var inputs = new BoardController();
    inputs.setJsPlumbInstance(jsPlumb);
  /*  inputs.setCircuitContainer('mid');
    inputs.makeDraggable('inputs');
    draggable('inputs', 'mid');*/

    inputs.addEndPoint('red',6,1, 'inputs', 'input_A', 'input_A', [0, 0, 0, 0, 597, -90], 'red');
    inputs.addEndPoint('red',6,2, 'inputs', 'input_B', 'input_B', [0, 0, 0, 0, 657, -90], 'red');
}

function ic555() {
    var x = document.getElementById("ic555");
    x.style.visibility = "visible";

    var ic555 = new BoardController();
    ic555.setJsPlumbInstance(jsPlumb);
    ic555.setCircuitContainer('mid');

    {
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_8', 'ic555_81', [0, 0, 1, -1, 5, 0], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_8', 'ic555_82', [0, 0, 1, -1, 5, 13.5], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_8', 'ic555_83', [0, 0, 1, -1, 5, 27], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_8', 'ic555_84', [0, 0, 1, -1, 5, 40.5], 'purple');
  //      ic7404.addEndPoint('black',4,1,1, 'ic7404', 'ic7404_VCC', 'ic7404_VCC5', [0, 0, 1, -1, 5, 54], 'purple');

       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_7', 'ic555_71', [0, 0, 1, -1, 18.5, 0], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_7', 'ic555_72', [0, 0, 1, -1, 18.5, 13.5], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_7', 'ic555_73', [0, 0, 1, -1, 18.5, 27], 'purple');
       ic555.addEndPoint('purple',4.2, 1,'ic555', 'ic555_7', 'ic555_74', [0, 0, 1, -1, 18.5, 40.5], 'purple');
     //  ic7404.addEndPoint('black',4,1,1, 'ic7404', 'ic7404_6A', 'ic7404_6A05', [0, 0, 1, -1, 18.5, 54], 'purple');

       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_6', 'ic555_61', [0, 0, 1, -1, 32, 0], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_6', 'ic555_62', [0, 0, 1, -1, 32, 13.5], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_6', 'ic555_63', [0, 0, 1, -1, 32, 27], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_6', 'ic555_64', [0, 0, 1, -1, 32, 40.5], 'purple');
   //     ic7404.addEndPoint('black',4,1,1, 'ic7404', 'ic7404_6Y', 'ic7404_6Y05', [0, 0, 1, -1, 32, 54], 'purple');

       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_5', 'ic555_51', [0, 0, 1, -1, 45.5, 0], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_5', 'ic555_52', [0, 0, 1, -1, 45.5, 13.5], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_5', 'ic555_53', [0, 0, 1, -1, 45.5, 27], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_5', 'ic555_54', [0, 0, 1, -1, 45.5, 40.5], 'purple');
     //   ic7404.addEndPoint('black',4,1,1, 'ic7404', 'ic7404_5A', 'ic7404_5A05', [0, 0, 1, -1, 45.5, 54], 'purple');


    //    ic7404.addEndPoint('black',4,1,1, 'ic7404', 'ic7404_1A', 'ic7404_1A01', [0, 0, 1, -1, 5, 94], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_1', 'ic555_11', [0, 0, 1, -1, 5, 107.5], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_1', 'ic555_12', [0, 0, 1, -1, 5, 121], 'purple');
       ic555.addEndPoint('purple',4.2, 1,'ic555', 'ic555_1', 'ic555_13', [0, 0, 1, -1, 5, 134.5], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_1', 'ic555_14', [0, 0, 1, -1, 5, 148], 'purple');

   //     ic7404.addEndPoint('black',4,1,1, 'ic7404', 'ic7404_1Y', 'ic7404_1Y01', [0, 0, 1, -1, 18.5, 94], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_2', 'ic555_21', [0, 0, 1, -1, 18.5, 107.5], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_2', 'ic555_22', [0, 0, 1, -1, 18.5, 121], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_2', 'ic555_23', [0, 0, 1, -1, 18.5, 134.5], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_2', 'ic555_24', [0, 0, 1, -1, 18.5, 148], 'purple');

      //  ic7404.addEndPoint('black',4,1,1, 'ic7404', 'ic7404_2A', 'ic7404_2A01', [0, 0, 1, -1, 32, 94], 'purple');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_3', 'ic555_31', [0, 0, 1, -1, 32, 107.5], 'purple');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_3', 'ic555_32', [0, 0, 1, -1, 32, 121], 'purple');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_3', 'ic555_33', [0, 0, 1, -1, 32, 134.5], 'purple');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_3', 'ic555_34', [0, 0, 1, -1, 32, 148], 'purple');

   //     ic7404.addEndPoint('black',4,1,1, 'ic7404', 'ic7404_2Y', 'ic7404_2Y01', [0, 0, 1, -1, 45.5, 94], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_4', 'ic555_41', [0, 0, 1, -1, 45.5, 107.5], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_4', 'ic555_42', [0, 0, 1, -1, 45.5, 121], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_4', 'ic555_43', [0, 0, 1, -1, 45.5, 134.5], 'purple');
       ic555.addEndPoint('purple',4.2,1, 'ic555', 'ic555_4', 'ic555_44', [0, 0, 1, -1, 45.5, 148], 'purple');

  }
}

function led1() {
    var x = document.getElementById("led");
    x.style.visibility = "visible";

    var led = new BoardController();
    led.setJsPlumbInstance(jsPlumb);
    led.setCircuitContainer('mid');
    led.makeDraggable('led');
    draggable('led', 'mid');

   // led.addEndPoint('purple',4.2,1, 'led', 'led_C', 'led_C01', [0, 0, 0, 1, 3, 62], 'purple');
    led.addEndPoint('purple',4.2,1, 'led', 'led_A', 'led_A02', [0, 0, 1, -1, 41, 98], 'purple');
    led.addEndPoint('purple',4.2,1, 'led', 'led_A', 'led_A03', [0, 0, 1, -1, 41, 112.5], 'purple');
    led.addEndPoint('purple',4.2,1, 'led', 'led_A', 'led_A04', [0, 0, 1, -1, 41, 126], 'purple');
    led.addEndPoint('purple',4.2,1, 'led', 'led_A', 'led_A05', [0, 0, 1, -1, 41, 139.5], 'purple');
   // led.addEndPoint('purple',4.2,1, 'led', 'led_A', 'led_A01', [0, 0, 0, 1, 16.5, 62], 'purple');
    led.addEndPoint('purple',4.2,1, 'led', 'led_C', 'led_C02', [0, 0, 1, -1, 55.5, 98], 'purple');
    led.addEndPoint('purple',4.2,1, 'led', 'led_C', 'led_C03', [0, 0, 1, -1, 55.5, 112.5], 'purple');
    led.addEndPoint('purple',4.2,1, 'led', 'led_C', 'led_C04', [0, 0, 1, -1, 55.5, 126], 'purple');
    led.addEndPoint('purple',4.2,1, 'led', 'led_C', 'led_C05', [0, 0, 1, -1, 55.5, 139.5], 'purple');

}

function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
   /* supply.makeDraggable('supply');
    draggable('supply', 'mid');*/

    supply.addEndPoint('black',5,1, 'supply', 'VCC', 'VCC', [0, 0, 0, 0, 52,    56], 'black');
    supply.addEndPoint('black',5,1, 'supply', 'GND', 'GND', [0, 0, 0, 0, 109.5, 56], 'black');
}
function led2() {
    var x = document.getElementById("led1");
    x.style.visibility = "visible";
    var led = new BoardController();
    led.setJsPlumbInstance(jsPlumb);
    led.setCircuitContainer('mid');
    led.makeDraggable('led1');
    draggable('led1', 'mid');

  //  led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'purple');
   led.addEndPoint('purple',4.2,1, 'led1', 'led_A1', 'led_A102', [0, 0, 1, -1, 41, 98], 'purple');
   led.addEndPoint('purple',4.2,1, 'led1', 'led_A1', 'led_A103', [0, 0, 1, -1, 41, 112.5], 'purple');
   led.addEndPoint('purple',4.2,1, 'led1', 'led_A1', 'led_A104', [0, 0, 1, -1, 41, 126], 'purple');
   led.addEndPoint('purple',4.2,1, 'led1', 'led_A1', 'led_A105', [0, 0, 1, -1, 41, 139.5], 'purple');
    //led.addEndPoint('purple',4.2,1, 'led1', 'led_A1', 'led_A101', [0, 0, 0, 1, 16.5, 62], 'purple');
   led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C102', [0, 0, 1, -1, 55.5, 98], 'purple');
   led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C103', [0, 0, 1, -1, 55.5, 112.5], 'purple');
   led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C104', [0, 0, 1, -1, 55.5, 126], 'purple');
   led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C105', [0, 0, 1, -1, 55.5, 139.5], 'purple');
}

function capacitor() {
    var x = document.getElementById("cap");
    x.style.visibility = "visible";
    var cap = new BoardController();
    cap.setJsPlumbInstance(jsPlumb);
    cap.setCircuitContainer('mid');
    cap.makeDraggable('cap');
    draggable('cap', 'mid');

  //  led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_C1', 'cap_C101', [0, 0, 1, -1, 27, 80], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_C1', 'cap_C102', [0, 0, 1, -1, 27, 94], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_C1', 'cap_C103', [0, 0, 1, -1, 27, 108], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_C1', 'cap_C104', [0, 0, 1, -1, 27, 120], 'purple');

    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_A1', 'cap_A101', [0, 0, 1, -1, 0.5, 80], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_A1', 'cap_A102', [0, 0, 1, -1, 0.5, 94], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_A1', 'cap_A103', [0, 0, 1, -1, 0.5, 108], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_A1', 'cap_A104', [0, 0, 1, -1, 0.5, 120], 'purple');
}
function resistor1() {
    var x = document.getElementById("resistance1");
    x.style.visibility = "visible";
    var resistance1= new BoardController();
    resistance1.setJsPlumbInstance(jsPlumb);
    resistance1.setCircuitContainer('mid');
    resistance1.makeDraggable('resistance1');
    draggable('resistance1', 'mid');

  //  led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C101', [0, 0, 1, -1, 6, -12], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C102', [0, 0, 1, -1, 6, -26], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C103', [0, 0, 1, -1, 6, -40], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C104', [0, 0, 1, -1, 6, -54], 'purple');

    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A101', [0, 0, 1, -1, 6, 54], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A102', [0, 0, 1, -1, 6, 67], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A103', [0, 0, 1, -1, 6, 80], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A104', [0, 0, 1, -1, 6, 93], 'purple');

}
function resistor2() {
    var x = document.getElementById("resistance2");
    x.style.visibility = "visible";
    var resistance2= new BoardController();
    resistance2.setJsPlumbInstance(jsPlumb);
    resistance2.setCircuitContainer('mid');
    resistance2.makeDraggable('resistance2');
    draggable('resistance2', 'mid');

  //  led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C101', [0, 0, 1, -1, 6, -12], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C102', [0, 0, 1, -1, 6, -26], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C103', [0, 0, 1, -1, 6, -40], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C104', [0, 0, 1, -1, 6, -54], 'purple');

    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A101', [0, 0, 1, -1, 6, 54], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A102', [0, 0, 1, -1, 6, 67], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A103', [0, 0, 1, -1, 6, 80], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A104', [0, 0, 1, -1, 6, 93], 'purple');

}
function resistor3() {
    var x = document.getElementById("resistance3");
    x.style.visibility = "visible";
    var resistance3= new BoardController();
    resistance3.setJsPlumbInstance(jsPlumb);
    resistance3.setCircuitContainer('mid');
    resistance3.makeDraggable('resistance3');
    draggable('resistance3', 'mid');

  //  led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C101', [0, 0, 1, -1, 4, -12], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C102', [0, 0, 1, -1, 4, -26], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C103', [0, 0, 1, -1, 4, -40], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C104', [0, 0, 1, -1, 4, -54], 'purple');

    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A101', [0, 0, 1, -1, 4, 54], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A102', [0, 0, 1, -1, 4, 67], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A103', [0, 0, 1, -1, 4, 80], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A104', [0, 0, 1, -1, 4, 93], 'purple');

}
function resistor4() {
    var x = document.getElementById("resistance4");
    x.style.visibility = "visible";
    var resistance4= new BoardController();
    resistance4.setJsPlumbInstance(jsPlumb);
    resistance4.setCircuitContainer('mid');
    resistance4.makeDraggable('resistance4');
    draggable('resistance4', 'mid');

  //  led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C101', [0, 0, 1, -1, 4, -12], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C102', [0, 0, 1, -1, 4, -26], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C103', [0, 0, 1, -1, 4, -40], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C104', [0, 0, 1, -1, 4, -54], 'purple');

    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A101', [0, 0, 1, -1, 4, 54], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A102', [0, 0, 1, -1, 4, 67], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A103', [0, 0, 1, -1, 4, 80], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A104', [0, 0, 1, -1, 4, 93], 'purple');

}
function resistor5() {
    var x = document.getElementById("resistance5");
    x.style.visibility = "visible";
    var resistance5= new BoardController();
    resistance5.setJsPlumbInstance(jsPlumb);
    resistance5.setCircuitContainer('mid');
    resistance5.makeDraggable('resistance5');
    draggable('resistance5', 'mid');

  //  led.addEndPoint('purple',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C102', [0, 0, 1, -1, 4, -12], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C102', [0, 0, 1, -1, 4, -26], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C102', [0, 0, 1, -1, 4, -40], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C102', [0, 0, 1, -1, 4, -54], 'purple');

    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A102', [0, 0, 1, -1, 4, 54], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A102', [0, 0, 1, -1, 4, 67], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A102', [0, 0, 1, -1, 4, 80], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A102', [0, 0, 1, -1, 4, 94], 'purple');

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it



         function change()                               //function for IMAGE OF A CHANGE ON CLCIKING ON IMAGE//
           {
          var img=document.getElementById("switch1").src;
            if(img.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("switch1").src="images/toggleon.png";
            }
                else
                {
                       document.getElementById("switch1").src="images/toggleoff1.png";
                       
             }
              if(isstartedsimulation){
              afterSimulation();
              afterSimulation1();

             }
           }
var toggleOnOff=0;
function afterSimulation()
{
  toggleOnOff++;
      toggleOnOff = toggleOnOff%4;
        var img1=document.getElementById("switch1").src;

      if (toggleOnOff == 1){
        document.getElementById("led2").src="images/led.png";
        document.getElementById("led3").src="images/led1.png";

      
      }
      else if(toggleOnOff == 2){
    document.getElementById("led2").src="images/led.png";
           document.getElementById("led3").src="images/led1.png";
      }
      else if(toggleOnOff == 3){
    document.getElementById("led2").src="images/led1.png";
           document.getElementById("led3").src="images/led.png";
      }
      else{
    document.getElementById("led2").src="images/led1.png";
           document.getElementById("led3").src="images/led.png";
      }
}
function afterSimulation1()
{
 
        var img3=document.getElementById("led2").src;
        var img2=document.getElementById("led3").src;

        var img1=document.getElementById("switch1").src;

            if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('led')!= -1 && img3.indexOf('led1')!= -1)

     {
         document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell4").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: yellow;text-align:center;font-weight: bolder; color:black";
                document.getElementById("cell1").style ="background-color: yellow;text-align:center;font-weight: bolder; color: black";
               

      
      }
         else   if(img1.indexOf('toggleon')!= -1 && img2.indexOf('led1')!= -1 && img3.indexOf('led')!= -1)
      {
    document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell4").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: yellow;text-align:center;font-weight: bolder; color:black";
                document.getElementById("cell2").style ="background-color: yellow;text-align:center;font-weight: bolder; color: black";
               
      }
      else if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('led1')!= -1 && img3.indexOf('led')!= -1){
     document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell4").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: yellow;text-align:center;font-weight: bolder; color:black";
                document.getElementById("cell3").style ="background-color: yellow;text-align:center;font-weight: bolder; color: black";
               
      }
      else if(img1.indexOf('toggleon')!= -1 && img2.indexOf('led')!= -1 && img3.indexOf('led1')!= -1){
     document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: yellow;text-align:center;font-weight: bolder; color:black";
                document.getElementById("cell4").style ="background-color: yellow;text-align:center;font-weight: bolder; color: black";
               
      }
}
 function start_simulation()
        { 
          isstartedsimulation = true;
          document.getElementById("switch1").onclick = function() {change()};
    //     document.getElementById("switch2").onclick = function() {change1()};
      
          document.getElementById("led2").src="images/led1.png";
           document.getElementById("led3").src="images/led.png";
                document.getElementById("cell1").style ="background-color: yellow;text-align:center;font-weight: bolder; color: black";
                document.getElementById("cell5").style ="background-color: yellow;text-align:center;font-weight: bolder; color: black";


         }


         
                window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
       document.getElementById("cell1").value="0";
document.getElementById("cell2").value="1";
document.getElementById("cell3").value="1";
document.getElementById("cell4").value="0";
document.getElementById("cell5").value="1";
document.getElementById("cell6").value="0";
document.getElementById("cell7").value="0";
document.getElementById("cell8").value="1";
document.getElementById("startbutton").disabled=true;


  document.getElementById("switch1").src="images/toggleoff1.png";


  document.getElementById("switch1").onclick=function(){change3()};


   document.getElementById("breadbutton").disabled=false;
                        document.getElementById("resistancebutton").disabled=false;
                        document.getElementById("ic2button").disabled=false;
                         document.getElementById("capbutton").disabled=false;
                        document.getElementById("supplybutton").disabled=false;
                        document.getElementById("switchbutton").disabled=false;
                        document.getElementById("ledbutton").disabled=false;
                       
                         document.getElementById("checkbutton").disabled=false;
                          
                        document.getElementById("resetbutton").disabled=false;
 
  document.getElementById("led2").src="images/led.png";
       breadboard();
       inputs();
       ic555();
      led2();
      capacitor();
       led1();
       supply();
       resistor3();
       resistor1();
       resistor2();
       resistor4();
       resistor5();
    }
}

function resetCircuit() {
    if(confirm("Do you want to reset?")){
        
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
}
         function change3()
            {var img=document.getElementById("switch1").src;
            if(img.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("switch1").src="images/toggleoff1.png";
            }
            else
            {
                       document.getElementById("switch1").src="images/toggleoff1.png";
                       
             }
             
}
	
       function reset1()                    //RESET ALL THE VALUES FILLED IN TABLE//
          {


alert("Do you want to reset the table?");
                  
                document.getElementById("cell2").value='';

               document.getElementById("cell3").value='';

               document.getElementById("cell4").value='';

               document.getElementById("cell6").value='';
               document.getElementById("cell7").value='';
               document.getElementById("cell8").value='';
         }



        function check1()                     //CHECK IF THE TABLE FILLED IS RIGHT OR NOT//
            {
               var a=document.getElementById("cell1").value;
               
                var b=document.getElementById("cell2").value;
                var c=document.getElementById("cell3").value;
                var d=document.getElementById("cell4").value;
                var e=document.getElementById("cell5").value;
                var f=document.getElementById("cell6").value;
                var g=document.getElementById("cell7").value;
                var h=document.getElementById("cell8").value;
        if(a=="0" && b=="1" && c=="1" && d=="0" && e=="1" && f=="0"  && g=="0" && h=="1")
         {
         	alert("Right data. Now proceed to simulation.");
         	 document.getElementById("breadbutton").disabled=false;
                        document.getElementById("capbutton").disabled=false;
                        document.getElementById("ic2button").disabled=false;
                        document.getElementById("supplybutton").disabled=false;
                        document.getElementById("switchbutton").disabled=false;
                        document.getElementById("ledbutton").disabled=false;
                        document.getElementById("resistancebutton").disabled=false;
                         document.getElementById("checkbutton").disabled=false;
                          
                        document.getElementById("resetbutton").disabled=false;
         }
         else if(a=="" && b=="" && c=="" && d=="" &&e=="" && f=="" && g=="" && h==""  )
         {
         	alert("Please fill the truth table.");
         }
          else if(a=="" || b=="" || c=="" || d=="" || e=="" || f=="" || g=="" || h==""  )
         {
          alert("Please fill the truth table completely.");
         }
         else
         {
         	alert("Wrong data.Please fill it again.");
         }
                     
                }
                