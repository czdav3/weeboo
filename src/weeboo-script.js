
let article = document.getElementsByTagName('article')[0];

$('article p').each(function(){
    let wb_content = $(this).html();
    if(wb_content.indexOf('[weeboo') !== -1){
        $(this).html(wb_runApp(wb_splitting(wb_content)));
    }
})

function wb_splitting(content){
    let wb_seeks = content.substring(content.indexOf("[") + 1, content.lastIndexOf("]")).split(';');
    let wb_object = {'type': wb_seeks[0]}
    for(a=1; a < wb_seeks.length; a++){
        let wb_splitter = wb_seeks[a].split('~');
        wb_object[wb_splitter[0]] = wb_splitter[1];
        console.log(wb_splitter)
    }
    return wb_object;
}

function wb_runApp(wb_object){
    const wb_fceDb = getAllFunctions();
    if(wb_fceDb.includes(wb_object['type'])){return wb_runSpecFce(wb_object)}
    else{console.log('Funkce neexistuje...')}
}

function wb_runSpecFce(wb_object){
    if(wb_object['type'] == 'weeboo-alert'){return wb_alert(wb_object)}
    else if(wb_object['type'] == 'weeboo-info'){return wb_alert(wb_object)}
}

function getAllFunctions(){
    const wb_functions = [
        'weeboo-alert', 'weeboo-info'
    ]
    return wb_functions;
}

function wb_alert(wb_object){
    let wb_alert_div = document.createElement('div');
        if(wb_object['class'] == undefined){wb_alert_div.setAttribute('class', 'wb-alert');}
        else{wb_alert_div.setAttribute('class', 'wb-alert wb-alert-' + wb_object['class']);}
        if(wb_object['headline']){
            let wb_alert_headline = '<h5 class="wb-alert-headline">' + wb_object['headline'] + '</h5><hr class="wb-alert-hr">';
            wb_alert_div.innerHTML = wb_alert_headline + wb_object['text'];
        }
        else{
            wb_alert_div.innerHTML = wb_object['text'];
        }
    return wb_alert_div;
}

function wb_info(wb_object){
    return 'Změněný element ' + wb_object['type'];
}