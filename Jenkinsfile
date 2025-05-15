pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/raouf21-dev/curriculum-app', branch: 'dev')
      }
    }

    stage('Logs') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -f curriculum-front//Dockerfile .'
      }
    }

  }
}