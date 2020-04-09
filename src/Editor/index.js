import React, { useRef, useState, useCallback, useEffect } from "react";
import IPFS from "ipfs";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/shell/shell.js";
import Button from "../Button";

import useStyles from "./styles";

const defaultText = `
# Install lot.sh
rm -rf /temp/test; wget -q -O- https://bit.ly/2UXTqOp > -; source -; rm -
# Import gist
import_remote $(resolve-gist-url rubeniskov hello_word)
# Call function
hello_word desde el confinamiento
`;

const Editor = (props) => {
  const classes = useStyles(props);
  const ipfsRef = useRef();
  const [cid, setCid] = useState();
  const [value, setValue] = useState(defaultText);
  const handleChange = useCallback(
    (editor, data, value) => {
      setValue(value);
    },
    [setValue]
  );

  const handleUpdate = useCallback(async () => {
    const node = ipfsRef.current;

    for await (const { cid } of node.add(value)) {
      setCid(cid.toString());
    }
  }, [ipfsRef, cid]);

  useEffect(async () => {
    ipfsRef.current = await IPFS.create({ repo: "/test" });
    console.log("node", ipfsRef.current);
  }, [ipfsRef]);

  return (
    <div>
      <CodeMirror
        className={classes.editor}
        options={{
          mode: "shell",
          theme: "material",
          lineNumbers: true,
        }}
        value={value}
        onBeforeChange={handleChange}
        onChange={handleChange}
      />
      <div
        style={{
          marginTop: "5px",
          textAlign: "right",
        }}
      >
        <Button
          style={{ marginRight: "5px" }}
          target="__blank__"
          href={`https://ipfs.io/ipfs/${cid}`}
          disabled={!cid}
        >
          Open File
        </Button>
        <Button onClick={handleUpdate}>Update</Button>
      </div>
    </div>
  );
};

export default Editor;
