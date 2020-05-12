export default function normalize(str){
    str = str.toLowerCase();
    str = str.replace('ă','a');
    str = str.replace('â','a');
    str = str.replace('î','i');
    str = str.replace('ș','s');
    str = str.replace('ț','t');
    return str;
}