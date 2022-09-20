export default function Breadcrumb() {
  return (
    <>
      <h1>Breadcrumb</h1>
      <h2>Example</h2>
      <div className="container">
        <div className="content-all">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb flex">
              <li class="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb ">
            <ol class="breadcrumb flex">
              <li class="breadcrumb-item"><a href="/#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb flex">
              <li class="breadcrumb-item"><a href="/#">Home</a></li>
              <li class="breadcrumb-item"><a href="/#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
        </div>
      </div>
      <h2>Dividers</h2>
      <div className="container">
        <div className="content-all">
          <nav aria-label="breadcrumb ">
            <ol class="breadcrumb breadcrumb-divi-top flex">
              <li class="breadcrumb-item"><a href="/#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>
        </div>
        <div className="content-all breadcrumb-divi">
          <nav aria-label="breadcrumb ">
            <ol class="breadcrumb breadcrumb-divi-middle flex">
              <li class="breadcrumb-item"><a href="/#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>
        </div>
        <div className="content-all">
          <nav aria-label="breadcrumb ">
            <ol class="breadcrumb breadcrumb-divi-bottom flex">
              <li class="breadcrumb-item"><a href="/#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}