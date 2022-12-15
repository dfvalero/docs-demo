import Button from './components/Button/Button';
import Layout from './components/Layout/Layout';

function App() {
    return (
        <Layout>
            <div>
                <div>Variant:</div>
                <br />
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
            </div>
            <br />
            <br />
            <div>
                <div>Size:</div>
                <br />
                <Button size="small">Small</Button>
                <Button>Medium</Button>
                <Button size="large">Large</Button>
            </div>
            <br />
            <br />
            <div>
                <div>Text Transform:</div>
                <br />
                <Button>No Text Transform</Button>
                <Button textTransform="lowercase">Lowercase</Button>
                <Button textTransform="uppercase">Uppercase</Button>
                <Button textTransform="capitalize">capitalize</Button>
            </div>
        </Layout>
    );
}

export default App;
