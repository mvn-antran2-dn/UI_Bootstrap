import CheckboxGroup from "../../components/CheckboxGroup";
import DropdownCP from "../../components/Dropdowns";

export default function ButtonGroup() {
  return (
    <>
      <h1>Buttons</h1>
      <h2>Basic example</h2>
      <div className="container">
        <div className="content-all">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn-all bg-primary">Left</button>
            <button type="button" className="btn-all bg-primary">Middle</button>
            <button type="button" className="btn-all bg-primary">Right</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn-all bg-primary active">Active</button>
            <button type="button" className="btn-all bg-primary">Link</button>
            <button type="button" className="btn-all bg-primary">Link</button>
          </div>
        </div>
      </div>
      <h2>Mixed styles</h2>
      <div className="container">
        <div className="content-all">
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn-all bg-danger">Left</button>
            <button type="button" className="btn-all bg-warning">Middle</button>
            <button type="button" className="btn-all bg-success">Right</button>
          </div>
        </div>
      </div>
      <h2>Outline styles</h2>
      <div className="container">
        <div className="content-all">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn-all bg-outline-primary">Left</button>
            <button type="button" className="btn-all bg-outline-primary">Middle</button>
            <button type="button" className="btn-all bg-outline-primary">Right</button>
          </div>
        </div>
      </div>
      <h2>Checkbox and radio button groups</h2>
      <div className="container">
        <div className="content-all">
          <div className="btn-group cb-radio-btn-gr flex" role="group" aria-label="Basic checkbox toggle button group">
            <CheckboxGroup active={true} idForm="1"> Checkbox 1 </CheckboxGroup>
            <CheckboxGroup active={true} idForm="2"> Checkbox 2 </CheckboxGroup>
            <CheckboxGroup active={true} idForm="3"> Checkbox 3 </CheckboxGroup>
          </div>
        </div>
      </div>
      <h2>Button toolbar</h2>
      <div className="container">
        <div className="content-all">
          <div className="btn-toolbar flex" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2 first-group" role="group" aria-label="First group">
              <button type="button" className="btn-all bg-primary">1</button>
              <button type="button" className="btn-all bg-primary">2</button>
              <button type="button" className="btn-all bg-primary">3</button>
              <button type="button" className="btn-all bg-primary">4</button>
            </div>
            <div className="btn-group me-2 second-group" role="group" aria-label="Second group">
              <button type="button" className="btn-all bg-secondary">5</button>
              <button type="button" className="btn-all bg-secondary">6</button>
              <button type="button" className="btn-all bg-secondary">7</button>
            </div>
            <div className="btn-group third-group" role="group" aria-label="Third group">
              <button type="button" className="btn-all bg-info">8</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <div className="btn-toolbar mb-3 flex" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2 first-group" role="group" aria-label="First group">
              <button type="button" className="btn-all bg-outline-secondary">1</button>
              <button type="button" className="btn-all bg-outline-secondary">2</button>
              <button type="button" className="btn-all bg-outline-secondary">3</button>
              <button type="button" className="btn-all bg-outline-secondary">4</button>
            </div>
            <div className="input-group flex">
              <div className="input-group-text" id="btnGroupAddon">@</div>
              <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            </div>
          </div>

          <div className="btn-toolbar flex justify-content-between mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group first-group" role="group" aria-label="First group">
              <button type="button" className="btn-all bg-outline-secondary">1</button>
              <button type="button" className="btn-all bg-outline-secondary">2</button>
              <button type="button" className="btn-all bg-outline-secondary">3</button>
              <button type="button" className="btn-all bg-outline-secondary">4</button>
            </div>
            <div className="input-group flex">
              <div className="input-group-text" id="btnGroupAddon2">@</div>
              <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
            </div>
          </div>
        </div>
      </div>
      <h2>Sizing</h2>
      <div className="container">
        <div className="content-all">
          <div className="btn-group btn-group-lg" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn-all bg-outline-dark">Left</button>
            <button type="button" className="btn-all bg-outline-dark">Middle</button>
            <button type="button" className="btn-all bg-outline-dark">Right</button>
          </div>
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn-all bg-outline-dark">Left</button>
            <button type="button" className="btn-all bg-outline-dark">Middle</button>
            <button type="button" className="btn-all bg-outline-dark">Right</button>
          </div>
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn-all bg-outline-dark">Left</button>
            <button type="button" className="btn-all bg-outline-dark">Middle</button>
            <button type="button" className="btn-all bg-outline-dark">Right</button>
          </div>
        </div>
      </div>
      <h2>Nesting</h2>
      <div className="container">
        <div className="content-all">
          <div class="btn-group btn-group-dropdown" role="group" aria-label="Button group with nested dropdown">
            <button type="button" class="btn-all bg-primary un-dropdown">1</button>
            <button type="button" class="btn-all bg-primary un-dropdown">2</button>
            <DropdownCP
              contentDrop="Dropdown"
              bgColor="primary"
              itemDrops={["Dropdown link", "Dropdown link"]} />
          </div>
        </div>
      </div>
      <h2>Vertical variation</h2>
      <div className="container">
        <div className="content-all">
          <div class="btn-group btn-group-vertical flex" role="group" aria-label="Button group with nested dropdown">
            <button type="button " class="btn-all bg-primary un-dropdown first-column">Button</button>
            <button type="button" class="btn-all bg-primary un-dropdown">Button</button>
            <DropdownCP
              contentDrop="Dropdown"
              bgColor="primary"
              itemDrops={["Dropdown link", "Dropdown link"]} />
            <button type="button" class="btn-all bg-primary un-dropdown">Button</button>
            <button type="button" class="btn-all bg-primary un-dropdown">Button</button>
            <DropdownCP
              contentDrop="Dropdown"
              bgColor="primary"
              itemDrops={["Dropdown link", "Dropdown link"]} />
            <DropdownCP
              contentDrop="Dropdown"
              bgColor="primary"
              itemDrops={["Dropdown link", "Dropdown link"]} />
            <DropdownCP
              contentDrop="Dropdown"
              bgColor="primary"
              itemDrops={["Dropdown link", "Dropdown link"]} />
              <button type="button " class="btn-all bg-primary un-dropdown last-column">Button</button>
          </div>
        </div>
      </div>
    </>
  );
}