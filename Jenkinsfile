pipeline {
  agent {
    node {
      label 'agent1'
    }

  }
  stages {
    stage('error') {
      steps {
        git(url: 'https://github.com/ibrahim-shahin/homework7.github.io', branch: 'main')
      }
    }

  }
}