import React, { useState } from "react";
const Ipld = require("ipld");
const IpfsRepo = require("ipfs-repo");
const ipldRaw = require("ipld-raw");
const IpfsBlockService = require("ipfs-block-service");

const ipfsContext = React.createContext({});

export const createIpfs = async (repoPath) => {
  const repo = new IpfsRepo(repoPath, {
    lock: "fs",
  });
  const exists = await repo.exists();
  // Initialize or open repo whereas existed previously
  const err = await (exists ? repo.open() : repo.init({}));

  if (err) {
    console.log(err);
  }

  const blockService = new IpfsBlockService(repo);
  const ipld = new Ipld({
    formats: [ipldRaw],
    blockService: blockService,
  });
  console.log(ipldRaw);
  const rawData = Buffer.from("some raw data");
  // const cid = await ipldRaw.util.cid(rawData, { hashAlg: 'sha2-512' })
  // const cid = await ipld.put(rawData, ipldRaw.codec);
  // console.log(cid);
  return repo;
  // repo.init({}, (err) => {
  //   if (err) {
  //     return callback(err)
  //   }
  //   repo.open((err) => {
  //     if (err) {
  //       return callback(err)
  //     }
  //     const blockService = new IpfsBlockService(repo)
  //     const ipld = new Ipld({blockService: blockService})
  //     return callback(null, ipld)
  //   })
  // });

  // const node = await IPFS.create({ repo: "test" });

  // return {
  //   get: async (cid) => {
  //     let bufs = [];

  //     for await (const buf of node.cat(cid)) {
  //       bufs.push(buf);
  //     }

  //     return Buffer.concat(bufs);
  //   },
  // };
};

const useIpfs = () => {
  const ipfs = console.log(ipfs);

  // const ctx = useContext(ipfsContext);

  return ipfs;
};

export default useIpfs;
