pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/raouf21-dev/curriculum-app', branch: 'dev')
      }
    }

    stage('Logs') {
      parallel {
        stage('Logs') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-end install packages') {
          steps {
            sh 'cd curriculum && npm i'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'docker build -f curriculum-front//Dockerfile .'
      }
    }

  }
}