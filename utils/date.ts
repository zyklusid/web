export function DateIndo(date: Date): string {
    const tahun = date.getFullYear();
    const bulan = date.getMonth();
    const tanggal = date.getDate();
    const hari = date.getDay();

    let hari_extracted
    let bulan_extracted

    switch (hari) {
        case 0: hari_extracted = "Minggu"; break;
        case 1: hari_extracted = "Senin"; break;
        case 2: hari_extracted = "Selasa"; break;
        case 3: hari_extracted = "Rabu"; break;
        case 4: hari_extracted = "Kamis"; break;
        case 5: hari_extracted = "Jum'at"; break;
        case 6: hari_extracted = "Sabtu"; break;
    }
    switch (bulan) {
        case 0: bulan_extracted = "Januari"; break;
        case 1: bulan_extracted = "Februari"; break;
        case 2: bulan_extracted = "Maret"; break;
        case 3: bulan_extracted = "April"; break;
        case 4: bulan_extracted = "Mei"; break;
        case 5: bulan_extracted = "Juni"; break;
        case 6: bulan_extracted = "Juli"; break;
        case 7: bulan_extracted = "Agustus"; break;
        case 8: bulan_extracted = "September"; break;
        case 9: bulan_extracted = "Oktober"; break;
        case 10: bulan_extracted = "November"; break;
        case 11: bulan_extracted = "Desember"; break;
    }

    let tampilTanggal = tanggal + " " + bulan_extracted + " " + tahun
    return tampilTanggal
}