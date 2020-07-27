import React from 'react'
import { Tree } from '@zeit-ui/react'
import { FileTreeValue } from '@zeit-ui/react/dist/tree/tree'

const files: Array<FileTreeValue> = [
  {
    type: 'directory',
    name: 'tests',
    extra: 'testcases',
    files: [
      {
        type: 'directory',
        name: 'commands',
        extra: 'test for commands',
      },
      {
        type: 'directory',
        name: 'utils',
        extra: 'test utils',
      },
    ],
  },
  {
    type: 'directory',
    name: 'src',
    files: [
      {
        type: 'directory',
        name: 'commands',
        extra: 'main command files',
        files: [
          {
            type: 'file',
            name: 'hello.ts',
            extra: '"<Command> hello"',
          },
          {
            type: 'file',
            name: 'major.ts',
            extra: '"<Command>"',
          },
          {
            type: 'file',
            name: 'index.ts',
            extra: 'entry file',
          },
        ],
      },
      {
        type: 'directory',
        name: 'options',
        extra: 'options files',
        files: [
          {
            type: 'file',
            name: 'help.ts',
            extra: '"<Command> --help"',
          },
          {
            type: 'file',
            name: 'version.ts',
            extra: '"<Command> --version"',
          },
          {
            type: 'file',
            name: 'index.ts',
            extra: 'entry file',
          },
        ],
      },
      {
        type: 'file',
        name: 'index.ts',
        extra: 'entry file',
      },
    ],
  },
  {
    type: 'file',
    name: 'package.json',
  },
  {
    type: 'file',
    name: 'tsconfig.json',
  },
  {
    type: 'file',
    name: 'README.md',
  },
]

const FuncFiles = () => {
  return <Tree value={files} initialExpand />
}

export default FuncFiles
