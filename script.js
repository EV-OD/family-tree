FamilyTree.templates.rabin = Object.assign({}, FamilyTree.templates.base);
FamilyTree.templates.rabin.defs = `<style>
                                    .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
                                        background-color: #aeaeae;
                                    }
                                    .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
                                        background-color: #039BE5;
                                    }        
                                    .{randId}.male div.bft-img-button:hover{
                                        background-color: #F57C00;
                                    }
                                    .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
                                        background-color: #F57C00;
                                    }        
                                    .{randId}.female div.bft-img-button:hover{
                                        background-color: #039BE5;
                                    }
                                </style>
                                <clipPath id="rabin_img_0"><rect x="6" y="6" rx="54" ry="54" width="108" height="108"></rect></clipPath>
                                ${FamilyTree.gradientCircleForDefs('circle', '#aeaeae', 60, 5)}
                                ${FamilyTree.gradientCircleForDefs('male_circle', '#039BE5', 60, 5)}
                                ${FamilyTree.gradientCircleForDefs('female_circle', '#F57C00', 60, 5)}`;
FamilyTree.templates.rabin.field_0 = 
    '<text ' + FamilyTree.attr.width + ' ="230" class="user_name" style="font-size: 16px;font-weight:bold;" fill="#aeaeae" x="60" y="145" text-anchor="middle">{val}</text>';
    // FamilyTree.templates.rabin.field_0 = '<text style="font-size: 24px;" fill="#ffffff" x="100" y="90" text-anchor="middle">{val}</text>';

{/* <switch>
<foreignObject x="20" y="90" FamilyTree.attr.width="150" height="200">
<p xmlns="http://www.w3.org/1999/xhtml">Text goes here</p>
</foreignObject>

<text x="20" y="20">Your SVG viewer cannot display html.</text>
</switch> */}
// FamilyTree.templates.rabin.field_0 = 
//     `
//     <switch>
//     <foreignObject x="60" y="135" width="230" height="50">
//     <p xmlns="http://www.w3.org/1999/xhtml" style="font-size: 16px;font-weight:bold;" fill="#aeaeae; te">{val}</p>
//     </foreignObject>

//     <text x="20" y="20">Your SVG viewer cannot display html.</text>
//     </switch>
// `;

{/* <text ' + FamilyTree.attr.width + ' ="230" style="font-size: 16px;font-weight:bold;" fill="#aeaeae" x="60" y="135" text-anchor="middle">{val}</text> */}
FamilyTree.templates.rabin.field_1 = 
    '<text ' + FamilyTree.attr.width + ' ="150" style="font-size: 13px;" fill="#aeaeae" x="60" y="150" text-anchor="middle">{val}</text>';
FamilyTree.templates.rabin.node = '<use x="0" y="0" xlink:href="#circle" />';
FamilyTree.templates.rabin.img_0 = 
    '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#rabin_img_0)" xlink:href="{val}" x="6" y="6" width="108" height="108"></image>';
FamilyTree.templates.rabin.ripple = {
    radius: 60,
    color: "#e6e6e6",
    rect: null
};

FamilyTree.templates.rabin.size = [120, 120]
FamilyTree.templates.rabin_male = Object.assign({}, FamilyTree.templates.rabin);
FamilyTree.templates.rabin_male.node += '<use x="0" y="0" xlink:href="#male_circle" />';
FamilyTree.templates.rabin_male.ripple = {
    radius: 60,
    color: "#039BE5",
    rect: null
};
FamilyTree.templates.rabin_female = Object.assign({}, FamilyTree.templates.rabin);
FamilyTree.templates.rabin_female.node += '<use x="0" y="0" xlink:href="#female_circle" />';
FamilyTree.templates.rabin_female.ripple = {
    radius: 60,
    color: "#F57C00",
    rect: null
};
FamilyTree.templates.rabin.nodeMenuButton = `<use ${FamilyTree.attr.control_node_menu_id}="{id}" x="90" y="50" xlink:href="#base_node_menu" />`;

let family = new FamilyTree(document.getElementById("tree"), {
    mouseScrool: FamilyTree.none,
    siblingSeparation: 120,
    template: 'rabin',
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
    },
    nodes: [
        {id: 1, name:"Rikhi Ram Lc",pids:[2], gender:"male", img:"./images/rikhi.png"},
        {id: 2, name:"Hari Maya Lc", pids:[1], gender:"female", img:"./images/hari-maya.png"},

        // sons
        {id: 3, name:"Keshab Raj Lc", mid:[1], fid:[2], pids:[10], gender:"male", img:"./images/keshab.png"},
        {id: 4, name:"kshitiz Lc", mid:[1], fid:[2], pids:[11], gender:"male", img:"./images/avatar.png"},
        {id: 5, name:"Hari Krishna Lc", mid:[1], fid:[2] ,pids:[12], gender:"male", img:"./images/hari-krishna.png"},

        // daughters
        {id: 6, name:"Sarswati Subedi", mid:[1], fid:[2], gender:"female", img:"./images/sarswati.png"},
        {id: 7, name:"Malati Tiwari", mid:[1], fid:[2], gender:"female", img:"./images/malati.png"},
        {id: 8, name:"Ambika Lc", mid:[1], fid:[2], gender:"female", img:"./images/ambika.png"},
        {id: 9, name:"Maya Bhattrai", mid:[1], fid:[2], gender:"female", img:"./images/maya.png"},

        // wife of sons
        {id: 10, name:"Sarswati Kumari Lc", pids:[3], gender:"female", img:"./images/mummy.png"},
        {id: 11, name:"Bidhya Chettri", pids:[4], gender:"female", img:"./images/bidhya.png"},
        {id: 12, name:"Gita Lc", pids:[5], gender:"female", img:"./images/gita.png"},

        // children of sons
        {id: 13, name:"Subhash Lc" , fid:[3], mid:[10], gender:"male", img:"./images/subhash.png"},
        {id: 14, name:"Rabin Lc" , fid:[3], mid:[10], gender:"male", img:"./images/me.png"},

        // {id:15, name:"😂😂", pids:[14], gender: "female"}
    ]
});


