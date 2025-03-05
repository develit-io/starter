# 🪄 Develit.io Starter Templates
Quickly get started with a Develit.io template!


## Usage

You can use `develit` CLI to clone latest template to an empty directory:


```sh-session
$ npx develit create [<dir>] [-t,--template=<template>] 
```

**Example:** Clone `worker-entrypoint` to `my-app` directory:

```sh-session
$ npx develit create my-app -t worker-entrypoint
```

## Templates

| Name                                                                                | Description                                                                                                  | Local                                                      |
|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [worker-entrypoint](https://github.com/develit-io/starter/tree/worker-entrypoint)   | [CF Worker Entrypoint](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/rpc) | `npx develit create my-entrypoint -t worker-entrypoint`    |
| [nitro-orchestrator](https://github.com/develit-io/starter/tree/nitro-orchestrator) | [Nitro API](https://nitro.build/guide)                                                                       | `npx develit create my-orchestrator -t nitro-orchestrator` | 
| [monorepository](https://github.com/develit-io/starter/tree/monorepository)         | Monorepository                                                                                               | `npx develit create my-monorepository -t monorepository`   |
## Contribution

Each template is maintained in a branch (see [all branches](https://github.com/develit-io/starter/branches)).
For improvements, please open a Pull Request to each individual branch.

## License

[Open Source © Develit.io](./LICENSE.md) - Made with 💚