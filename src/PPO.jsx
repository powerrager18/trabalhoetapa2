import { useState } from "react";

function PPO() {

    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [nota4, setNota4] = useState(0);
    const [resultado, setResultado] = useState(0);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Calculo de notas PPO</h1>
            <div className="mb-3">
                <label htmlFor="txtNota1" className="form-label">nota 1</label>
                <input type="number" className="form-control"
                    id="txtNota1" placeholder="nota 1 - Obrigatório"
                    value={nota1}
                    onChange={e => setNota1(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtNota2" className="form-label">nota 2</label>
                <input type="number" className="form-control"
                    id="txtNota2" placeholder="nota 2 - Obrigatório"
                    value={nota2}
                    onChange={e => setNota2(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtNota3" className="form-label">nota 3</label>
                <input type="number" className="form-control"
                    id="txtNota3" placeholder="nota 3 - Obrigatório"
                    value={nota3}
                    onChange={e => setNota3(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtNota4" className="form-label">nota 4</label>
                <input type="number" className="form-control"
                    id="txtNota4" placeholder="nota 4 - Obrigatório"
                    value={nota4}
                    onChange={e => setNota4(e.target.value)} />
            </div>

            <button type="button" className="btn btn-outline-primary col-2"
                onClick={
                    () => setResultado( ((Number(nota1) * 5)/20) + ((Number(nota2) * 5)/20) + ((Number(nota3) * 5)/20) + ((Number(nota4) * 5)/20))
                }>Calcular nota total</button>

            <h1>nota 1: {nota1}</h1>
            <h1>nota 2: {nota2}</h1>
            <h1>nota 3: {nota3}</h1>
            <h1>nota 4: {nota4}</h1>
            <h1>Resultado: {resultado}</h1>
        </div>
    );
}

export default PPO;