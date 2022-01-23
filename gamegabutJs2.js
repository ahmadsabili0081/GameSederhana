window.alert("Selamat datang wahai para pengunjung");
window.alert("Sebelum kita mulai permainan, kita kenalan dulu");
let nama = String(prompt("Masukkan nama anda ? "));
    if(nama == ""){
        window.alert("Mohon isi nama kamu terlebih dahulu")
    }else{
        window.alert("Kita lanjut bermain game" + " " + nama);
        window.alert("sekarang kamu sudah berada di permainan ku")
        window.alert("Sebelum bermain, saya ingin bertanya pada anda")
        window.alert("Apakah kamu sudah berkerja atau kuliah");
        let tanyaKerja = String(prompt("Berkerja atau Kuliah ?  jawab dengan huruf kapital"));
        if(tanyaKerja == "Berkerja" || tanyaKerja == "berkerja"){    
            window.alert("Wah ternyata kamu sudah bekerja yah");
           let tanyaKerja2 = String(prompt("Kamu kerja apa ?\n1.Design \n2.Developer \n3.Dokter \n4.Kantoran \n5.Dll"))
            if(tanyaKerja2 == "1"){
                window.alert("Wah, kamu ternyata bisa desain yah" + nama + " " + "nanti ajarin aku yah" + " " + nama);
            }else if(tanyaKerja2 == "2"){
                window.alert("Wah, ternyata kamu programmer " + "Nanti ajarin aku javascript yah " + nama );
            }else if(tanyaKerja2 == "3"){
                window.alert("Wah, ternyata kamu seorang dokter " + "nanti gratisin aku yah " + nama + "Kalo aku lagi berobat xixixi ;)");
            }else if(tanyaKerja2 == "4"){
                window.alert("Wah, ternyata kamu orang kantoran " + "keren kamu  " + nama);
            }else{
                window.alert("Ternyata kamu masih malu yah kasih tau akunya");
            }
        }else if(tanyaKerja == "Kuliah" || tanyaKerja == "kuliah"){
            window.alert("Oalah, ternyata kamu masih kuliah");
            let tanyaKuliah = String(prompt("Kamu ngambil jurusan apa ? \n1.IT \n2.Broadcast \n3.Akutansi \n4.Hukum \n5.Politik"));
            if(tanyaKuliah == "1"){
                window.alert("Waw, kamu seorang programmer nih " + "kapan-kapan kita bisa colab bareng nih " + nama);
            }else if(tanyaKuliah ==  "2"){
                window.alert("wah,Jurusan keren itu " + "mantap dah " + nama);
            }else if(tanyaKuliah == "3"){
                window.alert("Wihh,akutansi mantep nih, jago ngitung kamu" + nama);
            }else if(tanyaKuliah == "4"){
                window.alert("Wih, jurusan keren nih, bisa jadi pengacara kamu " + nama);
            }else if(tanyaKuliah == "5"){
                window.alert("Wih, mantep nih kalo nanti udah jadi anggota jangan lupa yah "  + nama);
            }else{
                window.alert("Maaf, keyword yang anda ketik tidak ada");
            }
        }else{
            window.alert("Anda masih belum mempunya kegiatan??")
        }
    }
    window.alert("Wah seru juga nih ngobrol sama " + nama );
    window.alert("Lanjut lagi yuu")


// dialog ke 2
function Player(name,asal,kelamin,kelamin2){
	this.name = name;
	this.asal = asal;
	this.kelamin = kelamin;
	this.kelamin2 = kelamin2;
}

window.alert("Sesusai dengan prosedur dari obrolan ini, aku tidak boleh memberi tahu namaku");
let npc = new Player(prompt("Berikan aku nama sesuai keingian kamu ? "), 'Dunia komputer',prompt("Tebak, aku laki-laki/perempuan"));
window.alert("HI, sesuai permintaanmu, namaku adalah " + npc.name);
window.alert("Aku asal nya dari " + npc.asal + " awakoaawkaowako");
window.alert("awakwoak asbak, aku bukan " + npc.kelamin);
window.alert("Jangan marah yah, namanya juga permainan awoakwaowkao");

let tanyaLagi = String(prompt("1.Lanjut\n 2.Udahan"));
if(tanyaLagi == "1"){
	window.alert("Gaskennn")
}else if(tanyaLagi == "2"){
   window.alert("Yah cemen, lanjut terus sampai game ini udahan, jadi tidak ada pilihan untuk udahan awoakwoawk")
}

var pemain = new Player(prompt("Boleh aku tanya lagi, siapa nama kamu"),prompt("Asal kamu dari mana ?"), "",prompt("Boleh aku tanya, kamu laki-laki atau perempuan?") )
window.alert("Oke " + pemain.name + " Kita lanjut lagi permainnya");
window.alert("dan aku juga udah tau asal kamu dari "  + pemain.asal + " awoawkaowkao");
window.alert("dan ternya kamu adalah " + pemain.kelamin2 + " mwuahahahahah");
window.alert("Aku sudah tau nama kamu,dan asal kamu");
window.alert("data kamu akan saya cari untuk kebutuhan saya mwuahahahaha");



window.alert("Oke kawan, Sekarang aku ingin tahu informasi kamu lebih dalam ?");
let inputBiodata = [
    [prompt("Sekarang siapakah nama kamu sebenarnya ?"),prompt("Apa kesukaan kamu ?"),
     prompt("Tempat dan tanggal lahir"),prompt("Apa status kamu ? ")
    ]
]
function dataHandling(){
    for(let i = 0; i < inputBiodata.length; i++){
        window.alert(`nama kamu adalah ${inputBiodata[i][0]}`);
        window.alert(`Kesukaan kamu adalah ${inputBiodata[i][1]}`);
        window.alert(`Tempat lahir kamu adalah ${inputBiodata[i][2]}`);
        window.alert(`Status kamu adalah ?${inputBiodata[i][3]}`);
    }
    
}
dataHandling();
window.alert("Mwuahahaha sekarang data kamu sudah saya simpan di pinjaman berbasi online");
window.alert("dan data kamu akan saya pakai untuk kebutuhan yang tidak tidak mwuahahahahaha");
