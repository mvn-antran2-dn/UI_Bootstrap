import CardCP from "../../components/Card";
export default function Card() {
  return (
    <>
      <h1>Cards</h1>
      <h2>Example</h2>
      <div className="container">
        <div className="content-all example">
          <CardCP />
        </div>
      </div>
      <h2>Body</h2>
      <div className="container">
        <div className="content-all body">
          <CardCP />
        </div>
      </div>
      <h2>Title, Text and Links</h2>
      <div className="container">
        <div className="content-all title-text-link">
          <CardCP />
        </div>
      </div>
      <h2>Images</h2>
      <div className="container">
        <div className="content-all images">
          <CardCP />
        </div>
      </div>
      <h2>List-group</h2>
      <div className="container">
        <div className="content-all list-not-header-footer">
          <CardCP />
        </div>
      </div>
      <div className="container">
        <div className="content-all list-not-footer">
          <CardCP />
        </div>
      </div>
      <div className="container">
        <div className="content-all list-not-header">
          <CardCP />
        </div>
      </div>
      <h2>Kitchen sink</h2>
      <div className="container">
        <div className="content-all kitchen">
          <CardCP />
        </div>
      </div>
      <h2>Header and Footer</h2>
      <div className="container">
        <div className="content-all header-footer-not-footer">
          <CardCP />
        </div>
      </div>
      <div className="container">
        <div className="content-all header-footer-not-footer-btn">
          <CardCP />
        </div>
      </div>
      <div className="container">
        <div className="content-all header-footer">
          <CardCP />
        </div>
      </div>
      <h2>Using grid markup</h2>
      <div className="container">
        <div className="content-all using-grid-markup">
          <div className="row">
            <div className="col-6"><CardCP /></div>
            <div className="col-6"><CardCP /></div>
          </div>
        </div>
      </div>
      <h2>Using utilities</h2>
      <div className="container">
        <div className="content-all using-utilities">
          <div className="row">
            <div className="col-10"><CardCP /></div>
            <div className="col-6"><CardCP /></div>
          </div>
        </div>
      </div>
      <h2>Navigation</h2>
      <div className="container">
        <div className="content-all navigation">
          <CardCP />
        </div>
        <div className="content-all navigation navigation-primary">
          <CardCP />
        </div>
      </div>
      <h1>Images</h1>
      <h2>Image caps</h2>
      <div className="container">
        <div className="content-all images-caps images-caps-top">
          <CardCP />
        </div>
        <div className="content-all images-caps images-caps-bottom">
          <CardCP />
        </div>
      </div>
      <h2>Image overlays</h2>
      <div className="container">
        <div className="content-all images-caps images-overlays">
          <CardCP />
        </div>
      </div>
      <h2>Horizontal</h2>
      <div className="container">
        <div className="content-all images-caps images-horizontal">
          <CardCP />
        </div>
      </div>
      <h1>card styles</h1>
      <h2>Background and color</h2>
      <div className="container">
        <div className="content-all bg-color">
          <div className="bg-and-color bg-primary">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-secondary">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-success">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-danger">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-warning">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-info">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-light">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-dark">
            <CardCP />
          </div>
        </div>

      </div>
      <h2>Border</h2>
      <div className="container">
        <div className="content-all bg-color">
          <div className="bg-and-color bg-and-color-outline bg-outline-primary">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-and-color-outline bg-outline-secondary">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-and-color-outline bg-outline-success">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-and-color-outline bg-outline-danger">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-and-color-outline bg-outline-warning">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-and-color-outline bg-outline-info">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-and-color-outline bg-outline-light">
            <CardCP />
          </div>
        </div>

        <div className="content-all bg-color">
          <div className="bg-and-color bg-and-color-outline bg-outline-dark">
            <CardCP />
          </div>
        </div>

      </div>
      <h2>Mixins utilities</h2>
      <div className="container">

        <div className="content-all bg-color">
          <div className="Mixin-utilities bg-and-color bg-and-color-outline bg-outline-success">
            <CardCP />
          </div>
        </div>

      </div>
      <h1>Card layout</h1>
      <h2>Card groups</h2>
      <div className="container">
        <div className="content-all card-groups ">
          <CardCP />
          <CardCP />
          <CardCP />
        </div>
      </div>
      <div className="container">
        <div className="content-all card-groups card-groups-bottom">
          <CardCP />
          <CardCP />
          <CardCP />
        </div>
      </div>
      <h2>Grid cards</h2>
      <div className="container">
        <div className="content-all grid-card ">
          <CardCP />
          <CardCP />
          <CardCP />
          <CardCP />
        </div>
      </div>
    </>
  );
}