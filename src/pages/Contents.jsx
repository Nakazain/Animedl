import Container from "../component/Container";

export default function Contents() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <div className="max-w-4xl">
          <Container title="Judul Anime">
            <div className="flex justify-center gap-4">
              <img className="rounded-md h-64" src="/img.jpg" alt="Anime Thumbnail" />
              <div>
                <p><span><b>Judul</b>: Silent Witch</span></p>
                <p><span><b>Japanese</b>: サイレント・ウィッチ 沈黙の魔女の隠しごと</span></p>
                <p><span><b>Skor</b>: 7.43</span></p>
                <p><span><b>Produser</b>: Aniplex, Cygames</span></p>
                <p><span><b>Tipe</b>: TV</span></p>
                <p><span><b>Status</b>: Ongoing</span></p>
                <p><span><b>Total Episode</b>: 13</span></p>
                <p><span><b>Durasi</b>: 24 min. per ep.</span></p>
                <p><span><b>Tanggal Rilis</b>: Jul 05, 2025</span></p>
                <p><span><b>Studio</b>: Studio Gokumi</span></p>
                <p><span><b>Genre</b>: Fantasy, School</span></p>
              </div>
              <div>
              </div>
            </div>
            <Container title={"Sinopsis"} noMargin>             
            <div>
              <p>Pada dasarnya, manusia tidak bisa memakai sihir tanpa merafalkan mantra. Namun, ada seorang gadis yang bisa melakukan hal tersebut. Ia adalah Monica Everett, salah satu penyihir yang dijuluki Silent Witch dan juga bagian dari Tujuh Sage di Kerajaan Lidl.</p><p>Monica mampu menggunakan sihir tanpa perlu merafalkan mantranya. Hal ini terjadi karena ia sama sekali tidak bisa berkomunikasi dan membuat dirinya harus beradaptasi dan menciptakan sihirnya sendiri.</p><p>Suatu hari, Monic didatangi oleh Louis yang juga bagian dari Tujuh Sage. Dalam pertemuan tersebut, Monica mendapatkan tugas untuk menjaga Pangeran Kedua secara diam-diam dan menyusup ke dalam akademi. Mampukah ia melakukan tugas tersebut?</p>
            </div>
            </Container>
          </Container>
        </div>
      </div>
    </div>
  );
}