Ext.define("MsTraining.view.demo.CustomWindow",{
    extend: 'Ext.window.Window',
    title: "My Custom Title",
    height: 200,
    width: 520,
    autoShow: true,
    closable: true, // enables you to have x on the window 
    maximizable:true,  // []
    // maximized:true
    draggable:false,
    modal:true
},function(){
    Ext.create("MsTraining.view.demo.CustomWindow");
})